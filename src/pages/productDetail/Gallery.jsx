import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: -32px;
  @media (min-width: 768px) {
    height: 368px;
    flex-direction: row;
    gap: 20px;
  }
  @media (min-width: 1024px) {
    height: unset;
    flex-direction: row;
    gap: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  @media (min-width: 768px) {
    width: 57%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Gallery = ({ images }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const { first, second, third } = { ...images };
  return (
    <GalleryContainer>
      {isTablet ? (
        <>
          <ImageContainer>
            <Image
              style={{ width: "100%", height: "50%" }}
              src={
                isDesktop
                  ? first.desktop
                  : isTablet
                  ? first.tablet
                  : first.mobile
              }
            />
            <Image
              style={{ width: "100%", height: "50%" }}
              src={
                isDesktop
                  ? second.desktop
                  : isTablet
                  ? second.tablet
                  : second.mobile
              }
            />
          </ImageContainer>
          <Image
            src={
              isDesktop ? third.desktop : isTablet ? third.tablet : third.mobile
            }
          />
        </>
      ) : (
        <>
          <Image
            src={
              isDesktop ? first.desktop : isTablet ? first.tablet : first.mobile
            }
          />
          <Image
            src={
              isDesktop
                ? second.desktop
                : isTablet
                ? second.tablet
                : second.mobile
            }
          />
          <Image
            src={
              isDesktop ? third.desktop : isTablet ? third.tablet : third.mobile
            }
          />
        </>
      )}
    </GalleryContainer>
  );
};

export default Gallery;
