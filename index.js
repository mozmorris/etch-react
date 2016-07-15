import React from 'react';
import { render } from 'react-dom';

const App = props => (
  <h1>Hello React (stateless component)</h1>
);

// const App = React.createClass({
//   render () {
//     return (
//       <h1>Hello React (via createClass)</h1>
//     );
//   }
// });

// class App extends React.Component {
//   render () {
//     return (
//       <h1>Hello React (via es6 class)</h1>
//     );
//   }
// }

render(<App />, document.getElementById('root'));
