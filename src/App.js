import React, { Component } from 'react';
import './App.css';
import Game from './Game';

const categories = [
    ["React Basics", [
      ["The company that created React", "What is Facebook?"],
      ["The basic building block of a React application, containing the view and logic for one small piece of the app", "What is a component?"],
      ["The word we use to create a class that is a subclass of a React component", "What is extends?"],
    ]],
    ["Component Basics", [
      ["The variable in our component that holds unchangeable information passed from the parent", "What are props?"],
      ["The variable in our component that holds information that changes during the life of the component", "What is state?"],
    ]],
  ];
class App extends Component {
  render() {
    return (
      <Game categories={categories} />
    );
  }
}

export default App;
