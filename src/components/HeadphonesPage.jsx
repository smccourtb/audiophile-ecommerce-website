import { Content } from "../styles/shared-styles";
import SubheaderSimple from "./SubheaderSimple";
import Product from "./Product";
import XZ99IIMobile from "../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import XX99IITablet from "../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import XX99IIDesktop from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XX99IMobile from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import XX99ITablet from "../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import XX99IDesktop from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import XX59Mobile from "../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import XX59Tablet from "../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import XX59Desktop from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import Story from "./Story";
import CategoryLinks from "./CategoryLinks";
import { useMediaQuery } from "react-responsive";

const HeadphonesPage = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <>
      <SubheaderSimple text={"Headphones"} />
      <Content>
        <Product
          img={
            isDesktop ? XX99IIDesktop : isTablet ? XX99IITablet : XZ99IIMobile
          }
          name={"XX99 Mark II Headphones"}
          description={`The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.`}
          isNew
        />
        <Product
          img={isDesktop ? XX99IDesktop : isTablet ? XX99ITablet : XX99IMobile}
          name={"XX99 Mark I Headphones"}
          description={`As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio 
          reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.`}
        />
        <Product
          img={isDesktop ? XX59Desktop : isTablet ? XX59Tablet : XX59Mobile}
          name={"XX59 Headphones"}
          description={`Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 
          headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the 
          move.`}
        />
        <CategoryLinks />
        <Story />
      </Content>
    </>
  );
};

export default HeadphonesPage;
