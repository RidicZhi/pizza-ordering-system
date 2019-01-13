import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/landing';

class App extends Component {
  render() {
    return (
      <Fragment >
        <GlobalStyle />
        <BrowserRouter>
          <Fragment>  
            <Route path='/' exact component={Landing}></Route>
            
          </Fragment>  
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
