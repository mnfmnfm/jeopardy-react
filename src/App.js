import React, { Component } from 'react';
import './App.css';
import Game from './Game';

const categories = [
    ["React Basics", [
      ["The company that created React", "What is Facebook?"],
      ["The basic building block of a React application, containing the view and logic for one small piece of the app", "What is a component?"],
      ["The name for a large component that holds most of the data and makes server calls for a collection of child components", "What is a container?"],
      ["The exact command we would run to make a new React app called jeopardy-react", "What is create-react-app jeopardy-react?"],
      ["The syntax extension to JavaScript we use in our React components", "What is jsx?"]
    ]],
    ["Component Basics", [
      ["The variable in our component that holds unchangeable information passed from the parent", "What are props?"],
      ["The variable in our component that holds information that changes during the life of the component", "What is state?"],
      ["The function in a component that returns the view code to be displayed in the React app", "What is render()?"],
      ["The word we use to create a class that is a Component", "What is extends?"],
      ["This is why you would need to pass a callback function as the argument to setState instead of an object", "What is updating the state based on the current state?"],
    ]],
    ["The Flow of Data", [
      ["The function to change state within a component", "What is this.setState()?"],
      ['The expression used to read a prop called \'banana\' in a component', 'What is this.props.banana?'],
      ['The expression used to read a key called "apple" in a component\'s state', 'What is this.state.apple?'],
      ['The direction that props are passed', 'What is parent to child?'],
    ]],
    ["Component Lifecycle", [
      ["This is the first method called when a component is created", "What is the constructor?"],
      ["This is the first line of any component constructor", "What is super(props)?"],
      ["This is the method called when a component is getting new props", "What is componentWillReceiveProps()?"],
      ["These are 3 React lifecycle methods", "What are componentWillReceiveProps, componentWillMount, componentDidMount? (Also accept render, etc.)"],
      ["This is the correct method in which to put an initial AJAX request within a component", "What is componentDidMount()?"],
    ]],
    ["Potpourri", [
      ["The result of running this.setState({}) when the state was {information: \"Hello!\"}", "What is the state not changing, or still being {information: \"Hello!\"}?"],
      ["The characters we use to escape JavaScript within the HTML-ish code in a React file", "What are curly braces {}?"],
      ["The method you must call on new functions defined within a component to ensure it maintains the reference to the correct this", "What is .bind()?"],
      ["The exact code for a render function that creates a div with a class of information", "What is render() {return(<div className=\"information\"></div>);}?"],
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
