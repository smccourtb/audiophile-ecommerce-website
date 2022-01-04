import { FooterNav, NavBar, StyledLink } from "../styles/shared-styles";
import { Link } from "react-router-dom";

const Navigation = ({ footer }) => {
  return (
    <>
      {footer ? (
        <FooterNav>
          <StyledLink href={"#"}>Home</StyledLink>
          <StyledLink href={"#"}>Headphones</StyledLink>
          <StyledLink href={"#"}>Speakers</StyledLink>
          <StyledLink href={"#"}>Earphones</StyledLink>
        </FooterNav>
      ) : (
        <NavBar>
          <Link to={"/"}>
            <StyledLink>Home</StyledLink>
          </Link>
          <Link to={"/headphones"}>
            <StyledLink>Headphones</StyledLink>
          </Link>
          <Link to={"/speakers"}>
            <StyledLink>Speakers</StyledLink>
          </Link>
          <Link to={"/earphones"}>
            <StyledLink>Earphones</StyledLink>
          </Link>
        </NavBar>
      )}
    </>
  );
};
export default Navigation;
