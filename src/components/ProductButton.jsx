import { StyledButton } from "../styles/shared-styles";

const ProductButton = ({ path, text, primary }) => {
  return (
    <StyledButton primary={primary} to={`/${path}`}>
      {text}
    </StyledButton>
  );
};

export default ProductButton;
