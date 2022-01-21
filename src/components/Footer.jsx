import styled from "styled-components/macro";
import Navigation from "./Navigation";
import { useMediaQuery } from "react-responsive";

const FooterContainer = styled.footer`
  background: linear-gradient(#d87d4a, #d87d4a) top / 104px 4px no-repeat,
    #000000; // orange bar at the top of the footer
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 0 24px 38px;

  @media (min-width: 768px) {
    background-position-x: 39px; //moves the bar to match the padding
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

const SocialImage = styled.svg`
  cursor: pointer;
  width: 24px;
  height: ${({ small }) => (small ? "19.5px" : "24px")};
  background-image: ${({ src }) => src && `url(${src})`};

  :hover {
    filter: invert(35%) sepia(81%) saturate(2078%) hue-rotate(346deg) brightness(90%) contrast(76%);
  }
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
          <LogoContainer src={"../assets/shared/desktop/logo.svg"} alt="logo" />
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
            <SocialImage
              src={"../assets/shared/desktop/icon-facebook.svg"}
              alt={"facebook"}
            />
            <SocialImage
              small
              src={"../assets/shared/desktop/icon-twitter.svg"}
              alt={"twitter"}
            />
            <SocialImage
              src={"../assets/shared/desktop/icon-instagram.svg"}
              alt={"instagram"}
            />
          </SocialMediaGroup>
        </>
      )}

      {/*Tablet layout*/}
      {isTablet && (
        <>
          {" "}
          <LogoContainer src={"../assets/shared/desktop/logo.svg"} alt="logo" />
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
              <SocialImage
                src={"../assets/shared/desktop/icon-facebook.svg"}
                alt={"facebook"}
              />
              <SocialImage
                small
                src={"../assets/shared/desktop/icon-twitter.svg"}
                alt={"twitter"}
              />
              <SocialImage
                src={"../assets/shared/desktop/icon-instagram.svg"}
                alt={"instagram"}
              />
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
            <LogoContainer
              src={"../assets/shared/desktop/logo.svg"}
              alt="logo"
            />
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
              <SocialImage
                src={"../assets/shared/desktop/icon-facebook.svg"}
                alt={"facebook"}
              />
              <SocialImage
                small
                src={"../assets/shared/desktop/icon-twitter.svg"}
                alt={"twitter"}
              />
              <SocialImage
                src={"../assets/shared/desktop/icon-instagram.svg"}
                alt={"instagram"}
              />
            </SocialMediaGroup>
          </div>
        </>
      )}
    </FooterContainer>
  );
};

export default Footer;
