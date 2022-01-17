import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";
import Navigation from "./Navigation";
import NiceModal from "@ebay/nice-modal-react";
import CartModal from "./CartModal";
import { useState } from "react";
import { DropDownMenu } from "./DropDownMenu";

const HeaderContainer = styled.header`
  height: 90px;
  background-color: #000000;
  position: sticky;
  top: 0;
  width: 100vw;
  padding: 32px 24px 33px;
  display: flex;
  justify-content: center;
  z-index: 2;
  @media (min-width: 768px) {
    padding: 32px 40px 33px;
  }
  @media (min-width: 1024px) {
    padding: 32px 165px 37px;
  }
`;

const ImgContainer = styled.div`
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
  @media (min-width: 768px) {
    margin-right: ${({ menu }) => menu && "42px"};
    margin-left: ${({ cart }) => cart && "auto"};
  }
  @media (min-width: 1024px) {
    margin-left: 0;
  }
`;

const Header = () => {
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const [menu, setMenu] = useState(false);
  const showCartModal = () => {
    // Show a modal with arguments passed to the component as props
    NiceModal.show(CartModal);
    // document.querySelector("body").style.overflow = "hidden";
  };
  const showMenuModal = () => {
    // Show a modal with arguments passed to the component as props
    NiceModal.show(DropDownMenu);
  };

  return (
    <>
      <HeaderContainer>
        {isLaptop ? (
          <ImgContainer>
            <img src={"../assets/shared/desktop/logo.svg"} alt="logo" />
            <Navigation />
            <HeaderImg
              cart={"true"}
              src={"../assets/shared/desktop/icon-cart.svg"}
              alt="shopping-cart"
              onClick={showCartModal}
            />
          </ImgContainer>
        ) : (
          <ImgContainer>
            <HeaderImg
              menu={"true"}
              style={{ height: "60%" }}
              src={"../assets/shared/tablet/icon-hamburger.svg"}
              alt="menu"
              onClick={showMenuModal}
            />
            <img src={"../assets/shared/desktop/logo.svg"} alt="logo" />
            <HeaderImg
              cart={"true"}
              src={"../assets/shared/desktop/icon-cart.svg"}
              alt="shopping-cart"
              onClick={showCartModal}
            />
          </ImgContainer>
        )}
      </HeaderContainer>
      {menu && <DropDownMenu />}
    </>
  );
};

export default Header;
