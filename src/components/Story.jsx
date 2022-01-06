import StoryImgMobile from "../assets/shared/mobile/image-best-gear.jpg";
import StoryImgTablet from "../assets/shared/tablet/image-best-gear.jpg";
import StoryImgDesktop from "../assets/shared/desktop/image-best-gear.jpg";

import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";

const StoryContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  padding: 80px 0 120px 0;
  @media (min-width: 768px) {
    padding: 56px 0 96px 0;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    min-height: 588px;
    gap: 125px;
    padding: 160px 0 200px 0;
  }
`;
const StoryImage = styled.img`
  border-radius: 8px;
  @media (min-width: 1024px) {
    order: 2;
  }
`;

const StoryHeader = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  padding-top: 8px;
  @media (min-width: 768px) {
    padding: 8px 58px 0 58px;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 44px;
    /* or 110% */
    text-align: center;
    letter-spacing: 1.42857px;
    text-transform: uppercase;

    color: #000000;
  }
  @media (min-width: 1024px) {
    text-align: left;
    padding: 0;
  }
`;

const StoryDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  @media (min-width: 768px) {
    padding: 8px 58px 0 58px;
  }
  @media (min-width: 1024px) {
    text-align: left;
    padding: 0;
  }
`;

const SpecialWord = styled(StoryHeader)`
  color: #d87d4a;
  display: inline-block;
  letter-spacing: 1px;
  @media (min-width: 768px) {
    padding: 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
`;

const Story = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <StoryContainer>
      <StoryImage
        src={
          isDesktop
            ? StoryImgDesktop
            : isTablet
            ? StoryImgTablet
            : StoryImgMobile
        }
        alt=""
      />
      {isDesktop ? (
        <TextContainer>
          <StoryHeader>
            Bringing you the <SpecialWord>BEST</SpecialWord>
            audio gear
          </StoryHeader>
          <StoryDescription>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </StoryDescription>
        </TextContainer>
      ) : (
        <>
          <StoryHeader>
            Bringing you the <SpecialWord>BEST</SpecialWord>
            audio gear
          </StoryHeader>
          <StoryDescription>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </StoryDescription>
        </>
      )}
    </StoryContainer>
  );
};

export default Story;
