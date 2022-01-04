import styled from "styled-components/macro";
import Logo from "../assets/shared/desktop/logo.svg";
import FacebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import InstagramIcon from "../assets/shared/desktop/icon-instagram.svg";
import TwitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import Navigation from "./Navigation";
import { useMediaQuery } from "react-responsive";

const FooterContainer = styled.footer`
  background: linear-gradient(#d87d4a, #d87d4a) top / 104px 4px no-repeat,
    #000000;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 0 24px 38px;

  @media (min-width: 768px) {
    background-position-x: 39px;
    padding: 0 40px 46px 39px;
    align-items: flex-start;
    gap: 32px;
  }
`;

const DescriptionText = styled.p`
  font-weight: 500;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const SocialMediaGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const Footer = () => {
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <FooterContainer>
      <img style={{ paddingTop: "52px" }} src={Logo} alt="logo" />
      <Navigation footer />
      <DescriptionText>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </DescriptionText>
      {isTablet ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "44px",
          }}
        >
          <DescriptionText as={"small"}>
            Copyright 2021. All Rights Reserved
          </DescriptionText>
          <SocialMediaGroup>
            <img src={FacebookIcon} alt={"facebook"} />
            <img src={TwitterIcon} alt={"twitter"} />
            <img src={InstagramIcon} alt={"instagram"} />
          </SocialMediaGroup>
        </div>
      ) : (
        <>
          <DescriptionText as={"small"}>
            Copyright 2021. All Rights Reserved
          </DescriptionText>
          <SocialMediaGroup>
            <img src={FacebookIcon} alt={"facebook"} />
            <img src={TwitterIcon} alt={"twitter"} />
            <img src={InstagramIcon} alt={"instagram"} />
          </SocialMediaGroup>
        </>
      )}
    </FooterContainer>
  );
};

export default Footer;
