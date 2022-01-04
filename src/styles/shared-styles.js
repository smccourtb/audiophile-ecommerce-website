import styled from "styled-components/macro";

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
`;

export const Link = styled.a`
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
