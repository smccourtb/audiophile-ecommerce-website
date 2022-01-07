import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Button = styled.button`
  width: 160px;
  height: 48px;
  background-color: ${({ primary }) => (primary ? "#d87d4a" : "transparent")};
  color: ${({ primary }) => (primary ? "#ffffff" : "#000000")};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  transition: all 0.2s ease-out;
  border: ${({ primary }) => (primary ? "none" : "1px solid #000000")};

  :hover {
    background-color: ${({ primary }) => (primary ? "#fbaf85" : "#000000")};
    color: #ffffff;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 34px;
`;

export const FooterNav = styled(NavBar)`
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

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  line-height: 25px;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;

  :hover,
  :visited,
  :link,
  :active {
    text-decoration: none;
  }

  &:hover {
    color: #d87d4a;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 24px 120px 24px;

  gap: 120px;

  @media (min-width: 768px) {
    padding: 0 39px;
  }

  @media (min-width: 1024px) {
    padding: 0 165px;
  }
`;
