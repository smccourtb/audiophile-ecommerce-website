import { Link } from "react-router-dom";
import ShopContext from "../context/ShopContext";
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
import Counter from "../components/Counter";
import ProductComponents from "./productDetail/ProductComponents";
import Gallery from "./productDetail/Gallery";
import OtherProducts from "./productDetail/OtherProducts";
import CategoryLinks from "../components/categoryLink/CategoryLinks";
import Story from "../components/Story";
import useCount from "../hooks/useCount";

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

const FeaturesHeader = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  letter-spacing: 0.857143px;
  text-transform: uppercase;

  color: #000000;
`;

const FeatureDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
  white-space: pre-wrap;
`;
const ProductDetail = ({ data }) => {
  const [count, increment, decrement] = useCount(1);
  return (
    <ShopContext.Consumer>
      {(context) => (
        <Content>
          <Link to={"/"}>Go Back</Link>
          {/*This should be tied to browser history instead of going to homepage*/}
          <ProductContainer>
            <ProductImage src={data.image.mobile} />
            <TextContainer
              style={{ alignItems: "flex-start", textAlign: "left" }}
            >
              {data.new && <NewProduct>New Product</NewProduct>}
              <ProductName>{data.name}</ProductName>
              <ProductDescription>{data.description}</ProductDescription>
              <Price>{`$${data.price}`}</Price>{" "}
              {/*TODO: write function that adds commas to prices*/}
              <ButtonContainer>
                <Counter
                  increment={increment}
                  decrement={decrement}
                  count={count}
                />
                <StyledButton
                  primary={"true"}
                  to={`/${data.slug}`}
                  onClick={context.addProductToCart.bind(this, data, count)}
                >
                  Add to Cart
                </StyledButton>
                {/* TODO: send amount to shopping cart when its created*/}
              </ButtonContainer>
            </TextContainer>
          </ProductContainer>
          <FeaturesContainer>
            <FeaturesHeader>FEATURES</FeaturesHeader>
            <FeatureDescription>{data.features}</FeatureDescription>
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
      )}
    </ShopContext.Consumer>
  );
};

export default ProductDetail;
