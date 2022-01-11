import MobileHero from "../assets/home/mobile/image-header.jpg";
import TabletHero from "../assets/home/tablet/image-header.jpg";
import DesktopHero from "../assets/home/desktop/image-hero.jpg";
import styled from "styled-components/macro";
import ProductButton from "./ProductButton";

const SubheaderContainer = styled.section`
  padding: 110px 24px 112px 23px;
  background: url(${MobileHero}) no-repeat;
  background-position-y: -85px;
  background-size: cover;
  height: 100%;
  background-color: rgb(110, 110, 110);
  background-blend-mode: multiply;

  @media (min-width: 768px) {
    background: url(${TabletHero}) no-repeat;
    padding: 126px 195px 167px 194px;
    background-size: cover;
    background-position-y: -85px;
    background-color: rgb(110, 110, 110);
    background-blend-mode: multiply;
  }

  @media (min-width: 1024px) {
    padding: 128px 877px 158px 165px;
    background: url(${DesktopHero}) no-repeat center bottom;
    background-size: cover;
    background-color: rgb(110, 110, 110);
    background-blend-mode: multiply;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const SubheadingTitle = styled.h1`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
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
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #ffffff;
  padding: 16px 0 24px;

  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
    padding: 24px 0 24px;
  }
`;

const ProductDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
  padding-bottom: 28px;
  @media (min-width: 768px) {
    padding: 0 15px 40px;
  }
  @media (min-width: 1024px) {
    padding: 0 49px 40px 0;
  }
`;

const Subheader = () => {
  return (
    <SubheaderContainer>
      <TextContainer>
        <SubheadingTitle>NEW PRODUCT</SubheadingTitle>
        <ProductLabel>XX99 Mark II Headphones</ProductLabel>
        <ProductDescription>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </ProductDescription>
        <ProductButton
          primary={"true"}
          path={"xx99-mark-two-headphones"}
          text={"See Product"}
        />
      </TextContainer>
    </SubheaderContainer>
  );
};

export default Subheader;
