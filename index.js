import React from 'react';
import { render } from 'react-dom';

const Child = (props) => {
  return (
    <p>Child component... takes props too (name: {props.name}))</p>
  );
};

const App = props => (
  <div>
    <h1>Hello {props.name} (stateless component)</h1>
    <Child name={props.name} />
  </div>
);

// const App = React.createClass({
//   render () {
//     return (
//       <div>
//         <h1>Hello {this.props.name} (via createClass)</h1>
//         <Child name={this.props.name} />
//       </div>
//     );
//   }
// });

// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <h1>Hello {this.props.name} (via es6 class)</h1>
//         <Child name={this.props.name} />
//       </div>
//     );
//   }
// }

render(<App name="React" />, document.getElementById('root'));
