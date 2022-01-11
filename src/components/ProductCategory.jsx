import {
  NewProduct,
  ProductContainer,
  ProductDescription,
  ProductImage,
  ProductName,
  StyledButton,
  TextContainer,
} from "../styles/shared-styles";

const ProductCategory = ({ img, name, description, isNew, flip, slug }) => {
  return (
    <ProductContainer>
      <ProductImage src={img} alt="" />
      <TextContainer flip={flip}>
        {isNew && <NewProduct>New Product</NewProduct>}
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
