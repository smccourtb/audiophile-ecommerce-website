import Hamburger from "../assets/shared/tablet/icon-hamburger.svg";
import Logo from "../assets/shared/desktop/logo.svg";
import ShoppingCart from "../assets/shared/desktop/icon-cart.svg";
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";

const HeaderContainer = styled.header`
  height: 90px;
  background-color: #000000;
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 32px 24px 33px;
  display: flex;
  justify-content: center;

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

const NavBar = styled.nav`
  display: flex;
  gap: 34px;
`;

const Link = styled.a`
  line-height: 25px;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;

  :hover {
    color: #d87d4a;
  }
`;

const Header = () => {
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <HeaderContainer>
      {isLaptop ? (
        <ImgContainer>
          <img src={Logo} alt="logo" />
          <NavBar>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Headphones</Link>
            <Link href={"#"}>Speakers</Link>
            <Link href={"#"}>Earphones</Link>
          </NavBar>
          <HeaderImg cart={"true"} src={ShoppingCart} alt="shopping-cart" />
        </ImgContainer>
      ) : (
        <ImgContainer>
          <HeaderImg
            menu={"true"}
            style={{ height: "60%" }}
            src={Hamburger}
            alt="menu"
          />
          <img src={Logo} alt="logo" />
          <HeaderImg cart={"true"} src={ShoppingCart} alt="shopping-cart" />
        </ImgContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
