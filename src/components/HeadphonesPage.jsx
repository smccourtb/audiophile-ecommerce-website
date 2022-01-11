import { Content } from "../styles/shared-styles";
import SubheaderSimple from "./SubheaderSimple";
import ProductCategory from "./ProductCategory";
import Story from "./Story";
import CategoryLinks from "./CategoryLinks";
import { useMediaQuery } from "react-responsive";

const HeadphonesPage = ({ data }) => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  const products = data.map((product) => (
    <ProductCategory
      key={product.id}
      img={
        isDesktop
          ? product["categoryImage"]["desktop"]
          : isTablet
          ? product["categoryImage"]["tablet"]
          : product["categoryImage"]["mobile"]
      }
      name={product.name}
      description={product.description}
      isNew={product.new}
      flip={product.id % 2}
    />
  ));

  return (
    <>
      <SubheaderSimple text={"Headphones"} />
      <Content>
        {products}
        <CategoryLinks />
        <Story />
      </Content>
    </>
  );
};

export default HeadphonesPage;
