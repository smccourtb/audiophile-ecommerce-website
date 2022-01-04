import { FooterNav, NavBar, StyledLink } from "../styles/shared-styles";

const Navigation = ({ footer }) => {
  return (
    <>
      {footer ? (
        <FooterNav>
          <StyledLink to={"/"}>Home</StyledLink>
          <StyledLink to={"/headphones"}>Headphones</StyledLink>
          <StyledLink to={"/speakers"}>Speakers</StyledLink>
          <StyledLink to={"/earphones"}>Earphones</StyledLink>
        </FooterNav>
      ) : (
        <NavBar>
          <StyledLink to={"/"}>Home</StyledLink>
          <StyledLink to={"/headphones"}>Headphones</StyledLink>
          <StyledLink to={"/speakers"}>Speakers</StyledLink>
          <StyledLink to={"/earphones"}>Earphones</StyledLink>
        </NavBar>
      )}
    </>
  );
};
export default Navigation;
