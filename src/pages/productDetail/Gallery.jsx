import styled from "styled-components/macro";

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Gallery = ({ images }) => {
  const { first, second, third } = { ...images };
  return (
    <GalleryContainer>
      <Image src={first.mobile} />
      <Image src={second.mobile} />
      <Image src={third.mobile} />
    </GalleryContainer>
  );
};

export default Gallery;
