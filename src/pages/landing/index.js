import React, { PureComponent, Fragment } from 'react';
import Banner from './components/Banner';
import Features from './components/Features';
import Sample from './components/Sample';
import Ingredients from './components/Ingredients';

class Landing extends PureComponent{
  render(){
    return(
      <Fragment>
        <Banner/>
        <Features/>
        <Sample/>
        <Ingredients/>
      </Fragment>
    )
  }
}

export default Landing;