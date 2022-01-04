import Hamburger from "../assets/shared/tablet/icon-hamburger.svg";
import Logo from "../assets/shared/desktop/logo.svg";
import ShoppingCart from "../assets/shared/desktop/icon-cart.svg";
import styled from "styled-components/macro";

const HeaderContainer = styled.header`
  height: 90px;
  background-color: #000000;
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 32px 24px 33px;
  display: flex;
  justify-content: center;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ImgContainer>
        <img style={{ height: "60%" }} src={Hamburger} alt="menu" />
        <img src={Logo} alt="logo" />
        <img src={ShoppingCart} alt="shopping-cart" />
      </ImgContainer>
    </HeaderContainer>
  );
};

export default Header;
