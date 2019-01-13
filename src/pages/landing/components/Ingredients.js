import React from 'react';
import { IngredientsWrapper, LandingContainer, IngredientsItems } from '../style';
import number5 from '../../../statics/images/number-5.png';
import number17 from '../../../statics/images/number-17.png';
import number8 from '../../../statics/images/number-8.png';
import number20 from '../../../statics/images/number-20.png';
import number11 from '../../../statics/images/number-11.png';
import number36 from '../../../statics/images/number-36.png';

const Ingredients = () => {
  return(
    <IngredientsWrapper>
      <LandingContainer>
        <IngredientsItems>
          <div>
            <img src={number5} alt='img'/>
            <p>CRUSTS</p>
          </div>
          <div>
            <img src={number17} alt='img'/>
            <p>SAUCES</p>
          </div>
          <div>
            <img src={number8} alt='img'/>
            <p>CHEESE</p>
          </div>
          <div>
            <img src={number20} alt='img'/>
            <p>VEGGIES</p>
          </div>
          <div>
          <img src={number11} alt='img'/>
            <p>MEATS</p>
          </div>
          <div>
            <img src={number36} alt='img'/>
            <p>TOPPINGS</p>
          </div>
        </IngredientsItems>
      </LandingContainer>
    </IngredientsWrapper>
  )  
}

export default Ingredients;