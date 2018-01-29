import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
  }
  clicked() {
    if(!this.props.answered) {
      this.props.onClicked([this.props.question, this.props.answer])
    }
  }
  render() {
    return (
      <div className={this.props.answered ? "question answered" : "question"} onClick={this.clicked} >
        {this.props.value}
      </div>
    );
  }
}

export default Question;
