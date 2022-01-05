import styled from "styled-components/macro";
import BgCircles from "../assets/home/desktop/pattern-circles.svg";
import ZX9SpeakerImage from "../assets/home/mobile/image-speaker-zx9.png";
import { Button } from "../styles/shared-styles";
// import ZX7SpeakerImage from "../assets/home/mobile/image-speaker-zx7.png"
// import YX1EarphonesImage from "../assets/home/mobile/image-earphones-yx1.jpg"

const FeaturedContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const ProductContainer = styled.div`
  display: flex;
  background-size: contain;
  padding: 55px 24px;
  color: white;
  background: #d87d4a url(${BgCircles}) no-repeat;
  background-position-y: -120px;
  background-position-x: center;

  background-size: 550px;
  border-radius: 8px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 24px;
`;

const ProductTitle = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
  /* or 111% */
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  padding: 8px 44px 0;

  color: #ffffff;
`;

const ProductDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */

  text-align: center;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.75;
`;
const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeaturedProducts = () => {
  return (
    <FeaturedContainer>
      <ProductContainer>
        <img src={ZX9SpeakerImage} alt="" style={{ width: "60%" }} />
        <ProductTitle>ZX9 SPEAKER</ProductTitle>
        <ProductDescription>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </ProductDescription>
        <Button>See Product</Button>
      </ProductContainer>
      <ProductContainer></ProductContainer>
      <ProductContainer></ProductContainer>
    </FeaturedContainer>
  );
};

export default FeaturedProducts;
