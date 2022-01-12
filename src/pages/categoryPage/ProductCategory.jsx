import {
  NewProduct,
  ProductContainer,
  ProductDescription,
  ProductImage,
  ProductName,
  StyledButton,
  TextContainer,
} from "../../styles/shared-styles";
import { useMediaQuery } from "react-responsive";

const ProductCategory = ({ data }) => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const { name, description, id, slug } = { ...data };
  const { mobile, tablet, desktop } = { ...data.categoryImage };
  return (
    <ProductContainer>
      <ProductImage
        src={isDesktop ? desktop : isTablet ? tablet : mobile}
        alt={name}
      />
      <TextContainer flip={id > 1 && id % 2}>
        {data.new && <NewProduct>New Product</NewProduct>}
        <ProductName>{name}</ProductName>
        <ProductDescription>{description}</ProductDescription>
        <StyledButton primary={"true"} to={`/${slug}`}>
          See Product
        </StyledButton>
      </TextContainer>
    </ProductContainer>
  );
};

export default ProductCategory;
