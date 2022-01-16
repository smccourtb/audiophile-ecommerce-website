import styled from "styled-components/macro";
import ProductButton from "../../components/ProductButton";
import { useMediaQuery } from "react-responsive";

const OtherProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 11px;
  }
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
  text-align: center;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: #000000;
`;

const ProductImage = styled.img`
  border-radius: 8px;
  width: 100%;
`;
const OtherProducts = ({ others }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const products = others.map((product, idx) => {
    const { mobile, tablet, desktop } = { ...product.image };
    return (
      <ProductContainer key={idx}>
        <ProductImage src={isDesktop ? desktop : isTablet ? tablet : mobile} />
        <ProductName>{product.name}</ProductName>
        <ProductButton
          path={product.slug}
          text={"See Product"}
          primary={"true"}
        />
      </ProductContainer>
    );
  });

  return (
    <OtherProductsContainer>
      <Header>YOU MAY ALSO LIKE</Header>
      <ProductsContainer>{products}</ProductsContainer>
    </OtherProductsContainer>
  );
};

export default OtherProducts;
