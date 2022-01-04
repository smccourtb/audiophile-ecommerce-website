import Hamburger from "../assets/shared/tablet/icon-hamburger.svg";
import Logo from "../assets/shared/desktop/logo.svg";
import ShoppingCart from "../assets/shared/desktop/icon-cart.svg";

const Header = () => {
  return (
    <header>
      <img src={Hamburger} alt="menu" />
      <img src={Logo} alt="logo" />
      <img src={ShoppingCart} alt="shopping-cart" />
    </header>
  );
};

export default Header;
