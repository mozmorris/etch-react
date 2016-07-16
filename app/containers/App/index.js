import React from 'react';
import { render } from 'react-dom';

import Main from '../../containers/Main';
import Count from '../../components/Count';
import Button from '../../components/Button';
import Header from '../../components/Header';

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

  handleDecrementClick(e) {
    this.setState({
      count: this.state.count - 1,
    });
  },

  render() {
    return (
      <div>
        <Header>
          <h1>React Application</h1>
        </Header>
        <Main>
          <Count count={this.state.count} />
          <Button label="Decrement" onClick={this.handleDecrementClick} />
          <Button label="Increment" onClick={this.handleIncrementClick} />
        </Main>
      </div>
    );
  },
});

export default App;
