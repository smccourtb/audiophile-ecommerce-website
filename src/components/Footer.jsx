import styled from "styled-components/macro";
import Logo from "../assets/shared/desktop/logo.svg";
import FacebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import InstagramIcon from "../assets/shared/desktop/icon-instagram.svg";
import TwitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import Navigation from "./Navigation";

const Footer = () => {
  const FooterContainer = styled.footer`
    background-color: #000000;
    position: fixed;
    bottom: 0;
  `;

  const DescriptionText = styled.p`
    font-weight: 500;
    line-height: 25px;
    text-align: center;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
  `;

  return (
    <FooterContainer>
      <img src={Logo} alt="logo" />
      <Navigation />
      <DescriptionText>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </DescriptionText>
      <DescriptionText as={"small"}>
        Copyright 2021. All Rights Reserved
      </DescriptionText>
      <div>
        <img src={FacebookIcon} alt={"facebook"} />
        <img src={TwitterIcon} alt={"twitter"} />
        <img src={InstagramIcon} alt={"instagram"} />
      </div>
    </FooterContainer>
  );
};

export default Footer;
