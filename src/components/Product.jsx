import { Button } from "../styles/shared-styles";
import styled from "styled-components/macro";

const ProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
`;

const NewProduct = styled.h2`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #d87d4a;
`;

const ProductName = styled.h2`
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
`;

const ProductDescription = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Product = ({ img, name, description, isNew }) => {
  return (
    <ProductContainer>
      <img src={img} style={{ width: "100%" }} alt="" />
      <TextContainer>
        {isNew && <NewProduct>New Product</NewProduct>}
        <ProductName>{name}</ProductName>
        <ProductDescription>{description}</ProductDescription>
        <Button primary>See Product</Button>
      </TextContainer>
    </ProductContainer>
  );
};

export default Product;
