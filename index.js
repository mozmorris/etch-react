import React from 'react';
import { render } from 'react-dom';

const Count = (props) => {
  return (
    <h3>Count {props.count}.</h3>
  );
};

const App = React.createClass({
  getInitialState() {
    return {
      count: 0,
    };
  },

  handleIncrementClick(e) {
    this.setState({
      count: this.state.count + 1,
    });
  },

  render() {
    return (
      <div>
        <h1>Hello {this.props.name} (via createClass)</h1>
        <Count count={this.state.count} />
        <button onClick={this.handleIncrementClick}>Increment</button>
      </div>
    );
  },
});

render(<App name="React" />, document.getElementById('root'));
