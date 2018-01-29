import React, { Component } from 'react';
import Category from './Category';

class Game extends Component {
  constructor(props) {
    super(props);
    this.showQuestion = this.showQuestion.bind(this);
    this.state = {
      displayedQuestion: undefined,
      displayingQuestion: false
    }
  }
  showQuestion(question) {
    this.setState({displayedQuestion: question, displayingQuestion: false});
    console.log(question);
  }
  render() {
    let categories = this.props.categories.map(x => (<Category
      title={x[0]}
      questions={x[1]}
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

export default Game;
