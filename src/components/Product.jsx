import { Button } from "../styles/shared-styles";
import styled from "styled-components/macro";

const ProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    gap: 52px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    height: 560px;
    gap: 125px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 16px;
    padding-left: 65px;
    padding-right: 65px;
  }
  @media (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;
    justify-content: center;
    padding: unset;
    order: ${({ flip }) => (flip ? -2 : 2)};
  }
`;

const NewProduct = styled.h2`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #d87d4a;
`;

const ProductName = styled.h2`
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.43px;
    padding: 0 90px;
  }
  @media (min-width: 1024px) {
    padding-left: unset;
    padding-right: unset;
  }
`;

const ProductDescription = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  @media (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 8px;
  }
  @media (min-width: 1024px) {
    padding-left: unset;
    padding-right: unset;
    padding-bottom: 16px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
  @media (min-width: 1024px) {
    width: 48.7%;
  }
`;
const Product = ({ img, name, description, isNew, flip }) => {
  return (
    <ProductContainer>
      <ProductImage src={img} alt="" />
      <TextContainer flip={flip}>
        {isNew && <NewProduct>New Product</NewProduct>}
        <ProductName>{name}</ProductName>
        <ProductDescription>{description}</ProductDescription>
        <Button primary>See Product</Button>
      </TextContainer>
    </ProductContainer>
  );
};

export default Product;
