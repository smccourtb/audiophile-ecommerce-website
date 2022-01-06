import styled from "styled-components/macro";
import Caret from "../assets/shared/desktop/icon-arrow-right.svg";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const CategoryBackground = styled.div`
  width: 100%;
  height: 165px;
  background: #f1f1f1;
  border-radius: 8px;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    height: 204px;
  }
`;

const ShopNowButton = styled.button`
  display: flex;
  width: 57.32px;
  justify-content: space-between;
  align-items: center;
  border: none;
  cursor: pointer;
  padding-bottom: 22px;
  @media (min-width: 1024px) {
    padding-bottom: 30px;
  }
`;

const ButtonText = styled.span`
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;

  :hover {
    color: #d87d4a;
  }
`;

const CategoryTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 1.07143px;
  text-transform: uppercase;
  padding-bottom: 17px;

  @media (min-width: 1024px) {
    padding-bottom: 15px;
    font-size: 18px;
  }
`;

const CategoryImage = styled.img`
  margin-bottom: -95px;
  width: 50%;
  height: 60%;
  z-index: 1;

  @media (min-width: 768px) {
    width: 70%;
    height: 65%;
  }

  @media (min-width: 1024px) {
    width: 65%;
    height: 70%;
    margin-bottom: -130px;
  }
`;

const CategoryLink = ({ image, title, target }) => {
  return (
    <CategoryContainer>
      <CategoryImage src={image} alt={title} />

      <CategoryBackground>
        <CategoryTitle>{title}</CategoryTitle>
        <ShopNowButton>
          <ButtonText>Shop</ButtonText>
          <img
            style={{ height: "10px", width: "5px" }}
            src={Caret}
            alt="shop-now-arrow"
            aria-hidden={true}
          />
        </ShopNowButton>
      </CategoryBackground>
    </CategoryContainer>
  );
};

export default CategoryLink;
