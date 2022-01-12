import { Content } from "../styles/shared-styles";
import SubheaderSimple from "../components/SubheaderSimple";
import ProductCategory from "./categoryPage/ProductCategory";
import Story from "../components/Story";
import CategoryLinks from "../components/categoryLink/CategoryLinks";
import { useLayoutEffect } from "react";

const CategoryPage = ({ data }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const products = data.map((product) => <ProductCategory data={product} />);
  return (
    <>
      <SubheaderSimple text={data[0].category} />
      <Content>
        {products}
        <CategoryLinks />
        <Story />
      </Content>
    </>
  );
};

export default CategoryPage;
