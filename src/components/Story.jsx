import StoryImgMobile from "../assets/shared/mobile/image-best-gear.jpg";
import styled from "styled-components/macro";

const StoryContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  padding: 80px 0 120px 0;
`;
const StoryImage = styled.img`
  border-radius: 8px;
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
`;

const StoryDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */

  text-align: center;

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const SpecialWord = styled(StoryHeader)`
  color: #d87d4a;
  display: inline-block;
  letter-spacing: 1px;
`;

const Story = () => {
  return (
    <StoryContainer>
      <StoryImage src={StoryImgMobile} alt="" />
      <StoryHeader>
        Bringing you the <SpecialWord>BEST</SpecialWord>
        audio gear
      </StoryHeader>
      <StoryDescription>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </StoryDescription>
    </StoryContainer>
  );
};

export default Story;
