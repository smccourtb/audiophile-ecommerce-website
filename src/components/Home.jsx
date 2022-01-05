import MobileHero from "../assets/home/mobile/image-header.jpg";
import TabletHero from "../assets/home/tablet/image-header.jpg";
import styled from "styled-components/macro";
import { Button } from "../styles/shared-styles";

const SubheaderContainer = styled.section`
  padding: 110px 24px 112px 23px;
  background: url(${MobileHero}) no-repeat;
  background-position-y: -85px;
  background-size: cover;
  height: 100%;

  @media (min-width: 768px) {
    background: url(${TabletHero}) no-repeat center center;
    padding: 216px 195px 167px 194px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubheadingTitle = styled.h1`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const ProductLabel = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #ffffff;
  padding: 16px 0 24px;
`;

const ProductDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
  padding-bottom: 28px;
`;

const Home = () => {
  return (
    <SubheaderContainer>
      <TextContainer>
        <SubheadingTitle>NEW PRODUCT</SubheadingTitle>
        <ProductLabel>XX99 Mark II Headphones</ProductLabel>
        <ProductDescription>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </ProductDescription>
        <Button primary>See Product</Button>
      </TextContainer>
    </SubheaderContainer>
  );
};

export default Home;
