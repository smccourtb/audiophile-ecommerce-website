import styled from "styled-components/macro";
import BgCircles from "../assets/home/desktop/pattern-circles.svg";
import ZX9SpeakerImgMobile from "../assets/home/mobile/image-speaker-zx9.png";
import ZX9SpeakerImgTablet from "../assets/home/tablet/image-speaker-zx9.png";
import ZX9SpeakerImgDesktop from "../assets/home/desktop/image-speaker-zx9.png";

import { Button } from "../styles/shared-styles";
import ZX7SpeakerImgMobile from "../assets/home/mobile/image-speaker-zx7.jpg";
import ZX7SpeakerImgTablet from "../assets/home/tablet/image-speaker-zx7.jpg";
import ZX7SpeakerImgDesktop from "../assets/home/desktop/image-speaker-zx7.jpg";

import YX1EarphonesImage from "../assets/home/mobile/image-earphones-yx1.jpg";
import YX1EarphonesTablet from "../assets/home/tablet/image-earphones-yx1.jpg";

import YX1EarphonesImgDesktop from "../assets/home/desktop/image-earphones-yx1.jpg";

import { useMediaQuery } from "react-responsive";

const FeaturedContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0;
    height: 560px;
    overflow: hidden;
    background-position-y: -15px;
    background-position-x: -175px;
    background-size: 85%;
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
  @media (min-width: 1024px) {
    padding: 0 88px 24px 0;
    text-align: left;
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
  @media (min-width: 1024px) {
    padding-bottom: 40px;
    text-align: left;
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
  @media (min-width: 1024px) {
    background: #f1f1f1 url(${ZX7SpeakerImgDesktop});
    padding-left: 92px;
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
  @media (min-width: 1024px) {
    padding-left: 95px;
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
  @media (min-width: 1024px) {
    width: 43%;
    margin-bottom: -10px;
    align-self: flex-end;
    padding-left: 117.5px;
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
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <FeaturedContainer>
      <FeatureProductContainer>
        <FeaturedImage
          src={
            isDesktop
              ? ZX9SpeakerImgDesktop
              : isTablet
              ? ZX9SpeakerImgTablet
              : ZX9SpeakerImgMobile
          }
          alt=""
        />
        {isDesktop ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "133px 95px 124px 138px",
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <ProductTitle>ZX9 SPEAKER</ProductTitle>
            <ProductDescription>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </ProductDescription>

            <Button>See Product</Button>
          </div>
        ) : (
          <>
            <ProductTitle>ZX9 SPEAKER</ProductTitle>
            <ProductDescription>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </ProductDescription>

            <Button>See Product</Button>
          </>
        )}
      </FeatureProductContainer>
      <SecondaryProductContainer>
        <SecondaryTitle>XY7 Speaker</SecondaryTitle>
        <Button>See Product</Button>
      </SecondaryProductContainer>
      {isDesktop ? (
        <div style={{ display: "flex", gap: "30px" }}>
          <ProductImage src={YX1EarphonesImgDesktop} />
          <ThirdProductContainer>
            <SecondaryTitle>YX1 Earphones</SecondaryTitle>
            <Button s>See Product</Button>
          </ThirdProductContainer>
        </div>
      ) : (
        <>
          {isTablet ? (
            <div style={{ display: "flex", gap: "11px" }}>
              <ProductImage src={YX1EarphonesTablet} />
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
        </>
      )}
    </FeaturedContainer>
  );
};

export default FeaturedProducts;
