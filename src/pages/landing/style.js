import styled from 'styled-components';
import bannerBackground from '../../statics/images/banner-background.png';
import bannerTitle from '../../statics/images/banner-title.png';
import background from '../../statics/images/background.jpg';
import sec21 from '../../statics/images/section2-1.png';
import sec22 from '../../statics/images/section2-2.png';
import sec23 from '../../statics/images/section2-3.png';
import sec3Base from '../../statics/images/Base.png';
import ingredientsBg from '../../statics/images/number-bg.png';

export const LandingContainer = styled.div`
  width: 80rem;
  display: block;
  margin: 0 auto;
`;

export const BannerWrapper = styled.div`
  height: 80vh;
  background: #000;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bannerBackground});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

export const BannerContent = styled.div`
  width: 800px;
`;

export const BannerTitle = styled.div`
  height: 70px;
  background: url(${bannerTitle});
  background-size: cover;
  background-position: 0 50%;
  background-repeat: no-repeat;
`;

export const BannerSlogan = styled.h2`
  margin-top: 20px;
  margin-bottom: 16px;
  font-size: 32px;
`;

export const Button = styled.button`
  margin-top: 20px;
  border: 1px solid #fdbc2c;
  padding: 12px 18px;
  background: transparent;
  color: #fdbc2c;
  font-size: 16px;
`;

export const FeaturesWrapper = styled.div`
  background: url(${background});
  padding:5rem 0 9rem 0;
  color:#ffffff;
`;

export const FeaturesTitle = styled.h2`
  font-size: 48px;
  text-align: center;
  margin: 2.5rem auto;
`;

export const Subtitle = styled.p`
  text-align: center;
  line-height: 2.5rem;
  &:last-of-type{
    margin-bottom: 2rem;
  }
`;

export const FeaturesItemContainer = styled.div`
  margin-top: 2rem;
  p{
    margin: 2rem 0;
  }
  h3{
    margin: 2.5rem 0;
    font-size: 2rem;
  }
`;

export const FeaturesItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 3rem;
  text-align: left;
`;

export const FeaturesItemIcon = styled.div`
  &.sec1{
    background: url(${sec21}); 
  }
  &.sec2{
    background: url(${sec22}); 
  }
  &.sec3{
    background: url(${sec23}); 
  }
  &.sec1, &.sec2,&.sec3{
    height: 5rem;
    background-repeat: no-repeat;
  }
`;

export const SampleWrapper = styled.div`
  background: url(${sec3Base});
  padding: 5rem 0;
`;

export const SampleItem = styled.div`
  display: grid;
  grid-template-columns: 24rem 35rem;
  grid-column-gap: 3rem;
  justify-content: center;
  .left{
    h2{
      font-size: 3rem;
      color: #ffffff;
      margin-top: 0;
    };
    h3{
      font-size: 2rem;
      line-height: 6rem;
      color: #000;
    };
    p{
      font-size: 1.1rem;
      color: #ffffff;
    };
    button{
      width: 10rem;
    };
  };
  .right{
    position: relative;
    img{
      position: absolute;
      top: -8rem;
    }
  } 
`;

export const IngredientsWrapper = styled.div`
  background: url(${ingredientsBg});
  padding: 5rem 0;
  color: #ffffff;
`;
export const IngredientsItems = styled.div`
  display: grid;
  grid-template-columns: repeat(6,auto);
  grid-column-gap: 3rem;
  div{
    height: 10rem;
    width: 10rem;
    border: 3px solid orange;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img{
    margin: 1rem auto;
  }
`;




