import React from 'react';
import { FeaturesWrapper, LandingContainer, FeaturesTitle, Subtitle, FeaturesItemContainer, FeaturesItem, FeaturesItemIcon } from '../style';

const Features = () => {
  return(
    <FeaturesWrapper >
      <LandingContainer>
        <FeaturesTitle className='landing-primary-font'>We are pizza makers, and our mission is to make cool pizza which feeds all your senses.</FeaturesTitle>
        <Subtitle>We prefer to rely on instinct and feel, measuring by hand, not by the gram. This is the authentic way to make pizza. Sure it’s a little unrefined, but we’re proud of that.</Subtitle>
        <Subtitle>It’s pizza like this which feeds your sense of sharing, adding flavour to those occasions when you get together with friends and family.</Subtitle>
        <Subtitle>And really, isn’t that what it’s all about? Because when pizza feeds all your senses, it’s not just great, it’s sensational.</Subtitle>
        <FeaturesItem>
          <FeaturesItemContainer>
            <FeaturesItemIcon className='sec1'/>
            <h3 className='landing-primary-font'>We're Careful</h3>
            <p>The crust is stored in a separate container, on a separate shelf in our fridge. The cheese, marinara sauce and pepperoni are stored in a  designated kit, and every pizza is freshly baked on designated parchment paper in our ovens.</p>
          </FeaturesItemContainer>
          <FeaturesItemContainer>
            <FeaturesItemIcon className='sec2'/> 
            <h3 className='landing-primary-font'>We're Certified</h3>
            <p>Our cheese-only and cheese-and-pepperoni gluten-free pizzas are prepared using the procedures certified by the Gluten Intolerance Group (GIG), and we take specific caution when making these pizzas.</p>
          </FeaturesItemContainer>
          <FeaturesItemContainer>
            <FeaturesItemIcon className='sec3'/>
            <h3 className='landing-primary-font'>You're Creative</h3>
            <p>For those simply looking to reduce gluten in their diets, we offer a Create Your Own pizza option. The cheese, pepperoni and marinara come from our gluten-free kit, but all additional toppings are stored at our standard make table.</p>
          </FeaturesItemContainer>
        </FeaturesItem>
      </LandingContainer>
    </FeaturesWrapper>
  )  
}

export default Features;



