import React from 'react';
import { render } from 'react-dom';

const App = props => (
  <div>
    <h1>Hello {props.name} (stateless component)</h1>
  </div>
);

// const App = React.createClass({
//   render () {
//     return (
//       <div>
//         <h1>Hello {this.props.name} (via createClass)</h1>
//       </div>
//     );
//   }
// });

// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <h1>Hello {this.props.name} (via es6 class)</h1>
//       </div>
//     );
//   }
// }

render(<App name="React" />, document.getElementById('root'));
