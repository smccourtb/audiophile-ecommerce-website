import { Content } from "../styles/shared-styles";
import SubheaderSimple from "./SubheaderSimple";
import Product from "./Product";
import XZ99IIMobile from "../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import XX99IMobile from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import XX59Mobile from "../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import styled from "styled-components/macro";
import Story from "./Story";
import CategoryLinks from "./CategoryLinks";

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
          isNew
        />
        <Product
          img={XX99IMobile}
          name={"XX99 Mark I Headphones"}
          description={`As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio 
          reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.`}
        />
        <Product
          img={XX59Mobile}
          name={"XX59 Headphones"}
          description={`Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 
          headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the 
          move.`}
        />
        <CategoryLinks />
        <Story />
      </ContentContainer>
    </>
  );
};

export default HeadphonesPage;
