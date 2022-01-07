import { Content } from "../styles/shared-styles";
import SubheaderSimple from "./SubheaderSimple";
import Product from "./Product";
import XZ99IIMobile from "../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import XZ99IITablet from "../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import XZ99IIDesktop from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import styled from "styled-components/macro";

const ContentContainer = styled(Content)`
  gap: 120px;
  padding: 64px 24px 120px 24px;
`;
const HeadphonesPage = () => {
  return (
    <>
      <SubheaderSimple text={"Headphones"} />
      <ContentContainer>
        <Product
          img={XZ99IIMobile}
          name={"XX99 Mark II Headphones"}
          description={`The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.`}
        />
        <Product
          img={XZ99IIMobile}
          name={"XX99 Mark II Headphones"}
          description={`The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.`}
        />
      </ContentContainer>
    </>
  );
};

export default HeadphonesPage;
