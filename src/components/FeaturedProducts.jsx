import styled from "styled-components/macro";
import BgCircles from "../assets/home/desktop/pattern-circles.svg";
import ZX9SpeakerImgMobile from "../assets/home/mobile/image-speaker-zx9.png";
import ZX9SpeakerImgTablet from "../assets/home/tablet/image-speaker-zx9.png";
import { Button } from "../styles/shared-styles";
import ZX7SpeakerImgMobile from "../assets/home/mobile/image-speaker-zx7.jpg";
import ZX7SpeakerImgTablet from "../assets/home/tablet/image-speaker-zx7.jpg";

import YX1EarphonesImage from "../assets/home/mobile/image-earphones-yx1.jpg";
import YX1EarphonesImgTablet from "../assets/home/tablet/image-earphones-yx1.jpg";

import { useMediaQuery } from "react-responsive";

const FeaturedContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 60px;
`;

const FeatureProductContainer = styled.div`
  display: flex;
  background-size: contain;
  padding: 55px 24px;
  background: #d87d4a url(${BgCircles}) no-repeat;
  background-position-y: -120px;
  background-position-x: center;
  background-size: 550px;
  border-radius: 8px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 24px;
  color: #ffffff;
  @media (min-width: 768px) {
    padding: 52px 169px 64px 171px;
    background-position-y: -315px;
    background-position-x: center;
    background-size: 137%;
  }
`;

const ProductTitle = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  padding: 8px 44px 0;
  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
    padding-top: 40px;
  }
`;

const ProductDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  mix-blend-mode: normal;
  opacity: 0.75;
  @media (min-width: 768px) {
    padding-bottom: 16px;
  }
`;

const SecondaryProductContainer = styled.div`
  padding: 101px 99px 101px 24px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 320px;
  background: #f1f1f1 url(${ZX7SpeakerImgMobile});
  background-size: cover;
  @media (min-width: 768px) {
    background: #f1f1f1 url(${ZX7SpeakerImgTablet});
    padding: 101px 423px 101px 62px;
  }
`;

const ThirdProductContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 200px;
  padding: 41px 56px 41px 24px;
  background: #f1f1f1;
  @media (min-width: 768px) {
    height: 320px;
    padding: unset;
    align-items: flex-start;
    justify-content: center;
    padding-left: 41px;
  }
`;

const SecondaryTitle = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-bottom: 32px;
  color: #000000;
`;

const FeaturedImage = styled.img`
  width: 60%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const ProductImage = styled.img`
  border-radius: 8px;
  @media (min-width: 768px) {
    height: 320px;
    width: 50%;
  }
`;

const FeaturedProducts = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <FeaturedContainer>
      <FeatureProductContainer>
        <FeaturedImage
          src={isTablet ? ZX9SpeakerImgTablet : ZX9SpeakerImgMobile}
          alt=""
        />
        <ProductTitle>ZX9 SPEAKER</ProductTitle>
        <ProductDescription>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </ProductDescription>
        <Button>See Product</Button>
      </FeatureProductContainer>
      <SecondaryProductContainer>
        <SecondaryTitle>XY7 Speaker</SecondaryTitle>
        <Button>See Product</Button>
      </SecondaryProductContainer>
      {isTablet ? (
        <div style={{ display: "flex", gap: "11px" }}>
          <ProductImage src={YX1EarphonesImgTablet} />
          <ThirdProductContainer>
            <SecondaryTitle>YX1 Earphones</SecondaryTitle>
            <Button s>See Product</Button>
          </ThirdProductContainer>
        </div>
      ) : (
        <>
          <ProductImage src={YX1EarphonesImage} />
          <ThirdProductContainer>
            <SecondaryTitle>YX1 Earphones</SecondaryTitle>
            <Button>See Product</Button>
          </ThirdProductContainer>
        </>
      )}
    </FeaturedContainer>
  );
};

export default FeaturedProducts;
