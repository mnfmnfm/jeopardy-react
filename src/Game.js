import React, { Component } from 'react';
import Category from './Category';

class Game extends Component {
  constructor(props) {
    super(props);
    this.showQuestion = this.showQuestion.bind(this);
    this.displayQuestionClicked = this.displayQuestionClicked.bind(this);
    this.state = {
      displayedQuestion: undefined,
      displayingQuestion: false,
      displayingAnswer: false,
      answered: [],
    }
  }
  showQuestion(question) {
    this.setState({displayedQuestion: question, displayingQuestion: true, answered: this.state.answered.concat(question)});

  }
  displayQuestionClicked() {
    if (this.state.displayingQuestion && this.state.displayingAnswer) {
      this.setState({displayingQuestion: false, displayingAnswer: false, displayedQuestion: undefined});
    } else if (this.state.displayingQuestion) {
      this.setState({displayingAnswer: true});
    }
  }
  render() {
    if(this.state.displayingQuestion) {
      return (
        <div>
          <h1>Jeopardy!</h1>
          <div className="question-displayed" onClick={this.displayQuestionClicked}>
            { this.state.displayingAnswer ? this.state.displayedQuestion[1] : this.state.displayedQuestion[0]}
          </div>
        </div>
      )
    } else {
      let categories = this.props.categories.map(x => (<Category
        title={x[0]}
        questions={x[1].map(q => this.state.answered.includes(q[0]) ? q.concat(true) : q.concat(false))}
        key={x[0]}
        showQuestion = {this.showQuestion}
      />));
      let answeredQuestions = [];
      for (let i = 0; i < this.state.answered.length; i+= 2) {
        answeredQuestions.push( (
        <div className="answered-question"key={this.state.answered[i]}>
          <div>{this.state.answered[i]}</div>
          <div>{this.state.answered[i + 1]}</div>
        </div>));
      }
      return (
        <div>
          <h1>Jeopardy!</h1>
          <div className="game">
            { categories }
          </div>
          <div className="answered-questions">
            <h4>Answered questions</h4>
            {answeredQuestions}
          </div>
        </div>
      );
    }
  }
}

export default Game;
