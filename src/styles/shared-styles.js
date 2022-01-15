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

export const StyledButton = styled(Link)`
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
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${({ primary }) => (primary ? "#fbaf85" : "#000000")};
    color: #ffffff;
  }

  :hover,
  :visited,
  :link,
  :active {
    text-decoration: none;
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
    padding: 96px 39px;
    gap: 96px;
  }

  @media (min-width: 1024px) {
    padding: 160px 165px;
    gap: 160px;
  }
`;

export const ProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    gap: 52px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    height: 560px;
    gap: 125px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 16px;
    padding-left: 65px;
    padding-right: 65px;
  }
  @media (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;
    justify-content: center;
    padding: unset;
    order: ${({ flip }) => (flip ? -2 : 2)};
  }
`;

export const NewProduct = styled.h2`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #d87d4a;
`;

export const ProductName = styled.h2`
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.43px;
    padding: 0 90px;
  }
  @media (min-width: 1024px) {
    padding-left: unset;
    padding-right: unset;
  }
`;

export const ProductDescription = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  @media (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 8px;
  }
  @media (min-width: 1024px) {
    padding-left: unset;
    padding-right: unset;
    padding-bottom: 16px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
  @media (min-width: 1024px) {
    width: 48.7%;
  }
`;
