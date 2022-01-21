// dependencies
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";
import NiceModal from "@ebay/nice-modal-react";

// components
import Navigation from "./Navigation";
import CartModal from "./CartModal";
import { DropDownMenu } from "./DropDownMenu";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: #000000;
  position: sticky;
  top: 0;
  width: 100vw;
  padding: 32px 24px 33px 24px;
  z-index: 2;
  border-bottom: 1px solid grey;
  @media (min-width: 768px) {
    padding: 32px 40px 33px;
  }
  @media (min-width: 1024px) {
    padding: 32px 165px 37px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

const HeaderImg = styled.img`
  cursor: pointer;
  height: 60%;
  @media (min-width: 768px) {
    margin-right: ${({ menu }) => menu && "42px"};
    margin-left: ${({ cart }) => cart && "auto"};
  }
  @media (min-width: 1024px) {
    margin-left: 0;
    height: unset;
  }
`;

const LogoImg = styled.img`
  @media (min-width: 1024px) {
    order: -1;
  }
`;

export const Header = () => {
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <HeaderContainer>
      <InnerContainer>
        {isLaptop ? (
          <Navigation />
        ) : (
          <HeaderImg
            menu={"true"}
            src={"../assets/shared/tablet/icon-hamburger.svg"}
            alt="menu"
            onClick={() => NiceModal.show(DropDownMenu)}
          />
        )}
        <LogoImg src={"../assets/shared/desktop/logo.svg"} alt="logo" />
        <HeaderImg
          cart={"true"}
          src={"../assets/shared/desktop/icon-cart.svg"}
          alt="shopping-cart"
          onClick={() => NiceModal.show(CartModal)}
        />
      </InnerContainer>
    </HeaderContainer>
  );
};
