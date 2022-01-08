import { Content } from "../styles/shared-styles";
import SubheaderSimple from "./SubheaderSimple";
import CategoryLinks from "./CategoryLinks";
import Story from "./Story";
import Product from "./Product";
import ZX9Mobile from "../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import ZX9Tablet from "../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import ZX9Desktop from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import ZX7Mobile from "../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import ZX7Tablet from "../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import ZX7Desktop from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import { useMediaQuery } from "react-responsive";

const SpeakersPage = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <>
      <SubheaderSimple text={"Speakers"} />
      <Content>
        <Product
          isNew
          img={isDesktop ? ZX9Desktop : isTablet ? ZX9Tablet : ZX9Mobile}
          name={"ZX9 SPEAKER"}
          description={
            "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          }
        />
        <Product
          flip
          img={isDesktop ? ZX7Desktop : isTablet ? ZX7Tablet : ZX7Mobile}
          name={"ZX7 SPEAKER"}
          description={
            "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          }
        />
        <CategoryLinks />
        <Story />
      </Content>
    </>
  );
};

export default SpeakersPage;
