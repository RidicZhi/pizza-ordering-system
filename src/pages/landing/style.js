import styled from 'styled-components';
import bannerBackground from '../../statics/images/banner-background.png';
import bannerTitle from '../../statics/images/banner-title.png';

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


