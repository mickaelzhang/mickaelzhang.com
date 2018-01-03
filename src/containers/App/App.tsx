import * as React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
