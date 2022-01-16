import {
  NewProduct,
  ProductContainer,
  ProductDescription,
  ProductImage,
  ProductName,
  StyledButton,
  TextContainer,
} from "../../styles/shared-styles";
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";

const CategoryContainer = styled(ProductContainer)`
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 125px;
  }
`;

const CategoryImage = styled(ProductImage)`
  @media (min-width: 768px) {
    height: 352px;
  }
  @media (min-width: 1024px) {
    height: 100%;
  }
`;

const CategoryTextContainer = styled(TextContainer)`
  text-align: center;
  align-items: center;
  @media (min-width: 768px) {
    padding: 0 60px;
  }
  @media (min-width: 1024px) {
    padding: 0;
    text-align: left;
    align-items: flex-start;
  }
`;

const CategoryName = styled(ProductName)`
  @media (min-width: 768px) {
    padding: 0 200px;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
    text-transform: uppercase;
    color: #000000;
  }
  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const NewProductText = styled(NewProduct)`
  font-size: 14px;
  line-height: 19px;
`;
const ProductCategory = ({ data }) => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const { name, description, id, slug, categoryImage } = { ...data };
  const { mobile, tablet, desktop } = { ...categoryImage };
  return (
    <CategoryContainer>
      <CategoryImage
        src={isDesktop ? desktop : isTablet ? tablet : mobile}
        alt={name}
      />
      <CategoryTextContainer flip={id > 1 && id % 2}>
        {data.new && <NewProductText>New Product</NewProductText>}
        <CategoryName>{name}</CategoryName>
        <ProductDescription>{description}</ProductDescription>
        <StyledButton primary={"true"} to={`/${slug}`}>
          See Product
        </StyledButton>
      </CategoryTextContainer>
    </CategoryContainer>
  );
};

export default ProductCategory;
