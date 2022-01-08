import { Content } from "../styles/shared-styles";
import SubheaderSimple from "./SubheaderSimple";
import CategoryLinks from "./CategoryLinks";
import Story from "./Story";
import Product from "./Product";
import YX1Mobile from "../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import YX1Tablet from "../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import YX1Desktop from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

import { useMediaQuery } from "react-responsive";

const EarphonesPage = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <>
      <SubheaderSimple text={"Earphones"} />
      <Content>
        <Product
          isNew
          img={isDesktop ? YX1Desktop : isTablet ? YX1Tablet : YX1Mobile}
          name={"YX1 WIRELESS EARPHONES"}
          description={
            "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          }
        />

        <CategoryLinks />
        <Story />
      </Content>
    </>
  );
};

export default EarphonesPage;
