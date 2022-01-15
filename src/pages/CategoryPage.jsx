import { ContentContainer } from "../styles/shared-styles";
import SubheaderSimple from "../components/SubheaderSimple";
import ProductCategory from "./categoryPage/ProductCategory";
import Story from "../components/Story";
import CategoryLinks from "../components/CategoryLinks";
import { useLayoutEffect } from "react";
import styled from "styled-components/macro";

const CategoryContainer = styled(ContentContainer)`
  padding: 56px 24px 120px;
  @media (min-width: 768px) {
    padding: 120px 40px 120px 39px;
  }
`;
const CategoryPage = ({ data }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const products = data.map((product) => (
    <ProductCategory key={product.id} data={product} />
  ));
  return (
    <>
      <SubheaderSimple text={data[0].category} />
      <CategoryContainer>
        {products}
        <CategoryLinks />
        <Story />
      </CategoryContainer>
    </>
  );
};

export default CategoryPage;
