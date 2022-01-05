import styled from "styled-components/macro";
import BgCircles from "../assets/home/desktop/pattern-circles.svg";
import ZX9SpeakerImage from "../assets/home/mobile/image-speaker-zx9.png";
import { Button } from "../styles/shared-styles";
import ZX7SpeakerImage from "../assets/home/mobile/image-speaker-zx7.jpg";
// import YX1EarphonesImage from "../assets/home/mobile/image-earphones-yx1.jpg"

const FeaturedContainer = styled.section`
  display: flex;
  flex-direction: column;
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
`;

const ProductDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  mix-blend-mode: normal;
  opacity: 0.75;
`;
const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondaryProductContainer = styled.div`
  padding: 101px 99px 101px 24px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 320px;
  background: #f1f1f1 url(${ZX7SpeakerImage});
  background-size: cover;
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
const FeaturedProducts = () => {
  return (
    <FeaturedContainer>
      <FeatureProductContainer>
        <img src={ZX9SpeakerImage} alt="" style={{ width: "60%" }} />
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
    </FeaturedContainer>
  );
};

export default FeaturedProducts;
