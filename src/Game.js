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
    debugger;
    this.setState({displayedQuestion: question, displayingQuestion: true, answered: this.state.answered.concat(question[0])});

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
        <div className="question-displayed" onClick={this.displayQuestionClicked}>
          { this.state.displayingAnswer ? this.state.displayedQuestion[1] : this.state.displayedQuestion[0]}
        </div>
      )
    } else {
      let categories = this.props.categories.map(x => (<Category
        title={x[0]}
        questions={x[1].map(q => this.state.answered.includes(q[0]) ? q.concat(true) : q.concat(false))}
        key={x[0]}
        showQuestion = {this.showQuestion}
      />));
      return (
        <div>
          <h2>Jeopardy!</h2>
          <div className="game">
            { categories }
          </div>
        </div>
      );
    }
  }
}

export default Game;
