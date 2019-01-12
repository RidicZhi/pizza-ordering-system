import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style';
import Landing from './pages/landing';

class App extends Component {
  render() {
    return (
      <Fragment >
        <GlobalStyle />
        <Landing />
      </Fragment>
    );
  }
}

export default App;
