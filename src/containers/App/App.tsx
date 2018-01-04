import * as React from 'react';

import NavBar from '@components/NavBar';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
