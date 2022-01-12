import styled from "styled-components/macro";
import ProductButton from "../../components/ProductButton";

const OtherProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

const ProductName = styled.h6`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1.71429px;
  text-transform: uppercase;

  color: #000000;
`;

const Header = styled.h5`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: 0.857143px;
  text-transform: uppercase;

  color: #000000;
`;

const ProductImage = styled.img`
  vorder-radius: 8px;
  width: 100%;
`;
const OtherProducts = ({ others }) => {
  const products = others.map((product) => (
    <ProductContainer>
      <ProductImage src={product.image.mobile} />
      <ProductName>{product.name}</ProductName>
      <ProductButton
        path={product.slug}
        text={"See Product"}
        primary={"true"}
      />
    </ProductContainer>
  ));

  return (
    <OtherProductsContainer>
      <Header>YOU MAY ALSO LIKE</Header>
      <ProductsContainer>{products}</ProductsContainer>
    </OtherProductsContainer>
  );
};

export default OtherProducts;
