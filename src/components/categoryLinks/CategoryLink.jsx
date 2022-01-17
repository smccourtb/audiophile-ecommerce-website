import styled from "styled-components/macro";
import { StyledButton } from "../../styles/shared-styles";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 165px;
  background: #f1f1f1;
  border-radius: 8px;
  padding: 22px;
  @media (min-width: 1024px) {
    height: 204px;
  }
`;

const CategoryImage = styled.img`
  width: 10em;
  z-index: 1;
`;
const CategoryTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 1.07143px;
  text-transform: uppercase;
  padding: 0 0 17px;
  @media (min-width: 1024px) {
    padding-bottom: 15px;
    font-size: 18px;
  }
`;
const ShopButton = styled(StyledButton)`
  display: flex;
  width: 57.32px;
  height: 18px;
  justify-content: space-between;
  align-items: center;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }

  :hover {
    background-color: transparent;
    color: #d87d4a;
  }
`;

const CategoryLink = ({ image, title, target }) => {
  return (
    <CategoryContainer>
      <CategoryImage src={image} alt={title} />
      <CategoryTitle>{title}</CategoryTitle>
      <ShopButton to={target}>
        Shop
        <img
          style={{ height: "10px", width: "5px" }}
          src={"../../assets/shared/desktop/icon-arrow-right.svg"}
          alt="shop-now-arrow"
          aria-hidden={true}
        />
      </ShopButton>
    </CategoryContainer>
  );
};

export default CategoryLink;
