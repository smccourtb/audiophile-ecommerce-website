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

  @media (min-width: 1024px) {
    background: linear-gradient(#d87d4a, #d87d4a) top / 101px 4px no-repeat,
      #000000;
    background-position-x: 167px;
    padding: 0 167px 48px 165px;
    justify-content: space-between;
    flex-direction: row;
    gap: 155px;
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

const LogoContainer = styled.img`
  padding-top: 52px;
  @media (min-width: 768px) {
    padding-top: 60px;
  }
  @media (min-width: 1024px) {
    padding-top: 75px;
  }
`;

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px" });
  const isTablet = useMediaQuery({ maxWidth: 1023, minWidth: 768 });
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <FooterContainer>
      {/*Mobile Layout*/}
      {isMobile && (
        <>
          <LogoContainer src={Logo} alt="logo" />
          <Navigation footer />
          <DescriptionText>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </DescriptionText>
          <DescriptionText as={"small"} style={{ fontWeight: "700" }}>
            Copyright 2021. All Rights Reserved
          </DescriptionText>
          <SocialMediaGroup>
            <img src={FacebookIcon} alt={"facebook"} />
            <img src={TwitterIcon} alt={"twitter"} />
            <img src={InstagramIcon} alt={"instagram"} />
          </SocialMediaGroup>
        </>
      )}

      {/*Tablet layout*/}
      {isTablet && (
        <>
          {" "}
          <LogoContainer src={Logo} alt="logo" />
          <Navigation footer />
          <DescriptionText>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </DescriptionText>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              paddingTop: "44px",
            }}
          >
            <DescriptionText as={"small"} style={{ fontWeight: "700" }}>
              Copyright 2021. All Rights Reserved
            </DescriptionText>
            <SocialMediaGroup>
              <img src={FacebookIcon} alt={"facebook"} />
              <img src={TwitterIcon} alt={"twitter"} />
              <img src={InstagramIcon} alt={"instagram"} />
            </SocialMediaGroup>
          </div>
        </>
      )}

      {/*Laptop layout*/}
      {isLaptop && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "36px",
              alignItems: "flex-start",
            }}
          >
            <LogoContainer src={Logo} alt="logo" />
            <DescriptionText>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </DescriptionText>
            <DescriptionText as={"small"} style={{ fontWeight: "700" }}>
              Copyright 2021. All Rights Reserved
            </DescriptionText>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "105px",
              alignItems: "flex-end",
            }}
          >
            <Navigation footer />
            <SocialMediaGroup>
              <img src={FacebookIcon} alt={"facebook"} />
              <img src={TwitterIcon} alt={"twitter"} />
              <img src={InstagramIcon} alt={"instagram"} />
            </SocialMediaGroup>
          </div>
        </>
      )}
    </FooterContainer>
  );
};

export default Footer;
