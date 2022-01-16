import { StyledButton } from "../styles/shared-styles";
import { useLayoutEffect } from "react";

const ProductButton = ({ path, text, primary }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <StyledButton primary={primary} to={`/${path}`}>
      {text}
    </StyledButton>
  );
};

export default ProductButton;
