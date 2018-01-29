import React, { Component } from 'react';
import './App.css';
import Game from './Game';

const categories = [
    ["React Basics", [
      ["The company that created React", "What is Facebook?"],
      ["The basic building block of a React application, containing the view and logic for one small piece of the app", "What is a component?"],
      ["The name for a large component that holds most of the data and makes server calls for a collection of child components", "What is a container?"],
      ["The word we use to create a class that is a subclass of a React component", "What is extends?"],
    ]],
    ["Component Basics", [
      ["The variable in our component that holds unchangeable information passed from the parent", "What are props?"],
      ["The variable in our component that holds information that changes during the life of the component", "What is state?"],
      ["The function in a component that returns the view code to be displayed in the React app", "What is render()?"],
      ["This is why you would need to pass a callback function as the argument to setState instead of an object", "What is updating the state based on the current state?"],
    ]],
    ["Potpourri", [
      ["The result of running this.setState({})", "What is the state not changing?"],
      ["The characters we use to escape JavaScript within the HTML-ish code in a React file", "What are curly braces {}?"],
      ["Two ways we can use conditionals in our render code", "What are using if statements around our return statements and using ternary within our return statement?"],
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
