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
  @media (min-width: 1024px) {
    padding: 79px 165px 160px;
    gap: 160px;
  }
`;

const Price = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #000000;
  @media (min-width: 1024px) {
    padding-bottom: 15px;
  }
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
  @media (min-width: 1024px) {
    margin: 0;
    gap: 32px;
  }
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
  @media (min-width: 1024px) {
    flex-direction: column;
    gap: 32px;
    margin-left: -90px;
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
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14286px;
  }
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
  @media (min-width: 1024px) {
    width: 73%;
  }
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
  @media (min-width: 768px) {
    width: 100%;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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
              </ButtonContainer>
            </TextContainer>
          </ProductContainer>
          {isDesktop ? (
            <Row>
              <FeaturesContainer>
                <FeaturesHeader>FEATURES</FeaturesHeader>
                <FeatureDescription>{data.features}</FeatureDescription>
              </FeaturesContainer>
              <IncludesContainer>
                <ComponentsHeader>IN THE BOX</ComponentsHeader>
                <ProductComponents items={data.includes} />
              </IncludesContainer>
            </Row>
          ) : (
            <>
              <FeaturesContainer>
                <FeaturesHeader>FEATURES</FeaturesHeader>
                <FeatureDescription>{data.features}</FeatureDescription>
              </FeaturesContainer>
              <IncludesContainer>
                <ComponentsHeader>IN THE BOX</ComponentsHeader>
                <ProductComponents items={data.includes} />
              </IncludesContainer>
            </>
          )}
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
