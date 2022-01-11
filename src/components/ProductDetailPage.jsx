import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import {
  Content,
  NewProduct,
  ProductContainer,
  ProductDescription,
  ProductImage,
  ProductName,
  StyledButton,
  TextContainer,
} from "../styles/shared-styles";
import Counter from "./Counter";
import ProductComponents from "./ProductComponents";
import Gallery from "./Gallery";
import OtherProducts from "./OtherProducts";
import CategoryLinks from "./CategoryLinks";
import Story from "./Story";

const Price = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  letter-spacing: 1.28571px;
  text-transform: uppercase;

  color: #000000;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const IncludesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const ProductDetailPage = ({ data }) => {
  return (
    <Content>
      <Link to={"/"}>Go Back</Link>
      {/*This should be tied to browser history instead of going to homepage*/}
      <ProductContainer>
        <ProductImage src={data.image.mobile} />
        <TextContainer style={{ alignItems: "flex-start", textAlign: "left" }}>
          {data.new && <NewProduct>New Product</NewProduct>}
          <ProductName>{data.name}</ProductName>
          <ProductDescription>{data.description}</ProductDescription>
          <Price>{`$${data.price}`}</Price>{" "}
          {/*TODO: write function that adds
          commas to prices*/}
          <ButtonContainer>
            <Counter />
            <StyledButton primary={"true"} to={`/${data.slug}`}>
              Add to Cart
            </StyledButton>
            {/* TODO: send amount to shopping cart when its created*/}
          </ButtonContainer>
        </TextContainer>
      </ProductContainer>
      <FeaturesContainer>
        <h3>FEATURES</h3>
        <p>{data.features}</p>
      </FeaturesContainer>
      <IncludesContainer>
        <h4>IN THE BOX</h4>
        <ProductComponents items={data.includes} />
      </IncludesContainer>
      <Gallery images={data.gallery} />
      <OtherProducts others={data.others} />
      <CategoryLinks />
      <Story />
    </Content>
  );
};

export default ProductDetailPage;
