import { StyledLink } from "../styles/shared-styles";
import styled from "styled-components/macro";

export const NavBar = styled.nav`
  display: flex;
  gap: 34px;
`;

const FooterNav = styled(NavBar)`
  flex-direction: column;
  gap: 16px;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 34px;
  }
  @media (min-width: 1024px) {
    padding-top: 75px;
  }
`;

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
