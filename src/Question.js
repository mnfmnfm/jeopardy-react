import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
    };
    this.clicked = this.clicked.bind(this);
  }
  clicked() {
    if(!this.state.answered) {
      this.setState({answered: true});
      this.props.onClicked(this.props.value)
    }
  }
  render() {
    return (
      <div className={this.state.answered ? "question answered" : "question"} onClick={this.clicked} >
        {this.props.value}
      </div>
    );
  }
}

export default Question;
