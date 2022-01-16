import ShopContext from "../context/ShopContext";
import styled from "styled-components/macro";
import {
  ContentContainer,
  GoBackLink,
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
import CategoryLinks from "../components/CategoryLinks";
import Story from "../components/Story";
import useCount from "../hooks/useCount";
import { useMediaQuery } from "react-responsive";

const ProductDetailContainer = styled(ContentContainer)`
  padding: 16px 24px 120px;
  gap: 120px;
  @media (min-width: 768px) {
    padding: 33px 39.5px 120px 39px;
  }
`;

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
  margin: -32px 0 -7px;
`;

const IncludesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: -32px;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin-bottom: 0;
  }
`;

const FeaturesHeader = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: #000000;
`;

const FeatureDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  white-space: pre-wrap;
`;

const ComponentsHeader = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: #000000;
  @media (min-width: 768px) {
    width: 50%;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14286px;
  }
`;

const ProductDetail = ({ data }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const [count, increment, decrement] = useCount(1);
  const { mobile, tablet, desktop } = { ...data.image };
  return (
    <ShopContext.Consumer>
      {(context) => (
        <ProductDetailContainer>
          <GoBackLink to={"/"}>Go Back</GoBackLink>
          <ProductContainer>
            <ProductImage
              src={isDesktop ? desktop : isTablet ? tablet : mobile}
            />
            <TextContainer>
              {data.new && <NewProduct>New Product</NewProduct>}
              <ProductName>{data.name}</ProductName>
              <ProductDescription>{data.description}</ProductDescription>
              <Price>{`$ ${data.price}`}</Price>{" "}
              <ButtonContainer>
                <Counter
                  increment={increment}
                  decrement={decrement}
                  count={count}
                  id={data.id}
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
            <ComponentsHeader>IN THE BOX</ComponentsHeader>
            <ProductComponents items={data.includes} />
          </IncludesContainer>
          <Gallery images={data.gallery} />
          <OtherProducts others={data.others} />
          <CategoryLinks />
          <Story />
        </ProductDetailContainer>
      )}
    </ShopContext.Consumer>
  );
};

export default ProductDetail;
