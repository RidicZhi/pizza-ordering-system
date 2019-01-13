import React, { PureComponent, Fragment } from 'react';
import Banner from './components/Banner';
import Features from './components/Features';

class Landing extends PureComponent{
  render(){
    return(
      <Fragment>
        <Banner/>
        <Features/>
      </Fragment>
    )
  }
}

export default Landing;