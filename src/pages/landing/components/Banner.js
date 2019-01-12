import React from 'react';
import { BannerWrapper, BannerContent, BannerTitle, BannerSlogan, Button } from '../style';

const Banner = () => {
  return(
    <BannerWrapper >
      <BannerContent>
        <BannerTitle/>
        <BannerSlogan className="landing-primary-font">We create custom, personal pizzas with quality ingredient in only file minutes</BannerSlogan>
        <Button>ORDER ONLINE</Button>
      </BannerContent>
    </BannerWrapper>
  )  
}

export default Banner;