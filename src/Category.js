import React, { Component } from 'react';
import Question from './Question';

class Category extends Component {
  render() {
    let questions = this.props.questions.map((x, i) => (<Question
      question={x[0]}
      answer={x[1]}
      key={x[0]}
      value={(i + 1) * 100}
      answered={x[2]}
      onClicked={ this.props.showQuestion }
    />));
    return (
      <div className="category">
        <div className="category-title">
          {this.props.title}
        </div>
        { questions }
      </div>
    );
  }
}

export default Category;
