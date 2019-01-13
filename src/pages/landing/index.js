import React, { PureComponent, Fragment } from 'react';
import Banner from './components/Banner';
import Features from './components/Features';
import Sample from './components/Sample';

class Landing extends PureComponent{
  render(){
    return(
      <Fragment>
        <Banner/>
        <Features/>
        <Sample/>
      </Fragment>
    )
  }
}

export default Landing;