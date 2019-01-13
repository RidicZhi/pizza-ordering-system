import React from 'react';
import { LandingContainer, SampleWrapper, SampleItem } from '../style';
import sec3Right from '../../../statics/images/section3.png';

const Banner = () => {
  return(
    <SampleWrapper>
      <LandingContainer>
        <SampleItem>
          <div className='left'>
              <h2>Peri-Peri</h2>
              <h3>$18 - $37</h3>
              <p>Marinated Chicken Breast Fillets, Shallots, Roasted Capsicum, Caramelised Onions & Bocconcini on a Tomato base, topped with Peri-Peri sauce</p>
              <button>ORDER NOW</button>
          </div>
          <div className='right'>
            <img className='pic' src={sec3Right} alt='img' />
          </div>
        </SampleItem>
      </LandingContainer>
    </SampleWrapper>
  )  
}

export default Banner;