import Subheader from "./Subheader";
import CategoryLink from "./CategoryLink";
import HeadphoneImage from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakerImage from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphoneImage from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import styled from "styled-components/macro";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;

  @media (min-width: 768px) {
    padding: 0 39px;
  }

  @media (min-width: 1024px) {
    padding: 0 165px;
  }
`;

const CategorieContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
    padding: 96px 0 48px 0;
  }

  @media (min-width: 1024px) {
    gap: 30px;
  }
`;
const Home = () => {
  return (
    <>
      <Subheader />
      <Content>
        <CategorieContainer>
          <CategoryLink
            image={HeadphoneImage}
            title={"Headphones"}
            target={"/headphones"}
          />
          <CategoryLink
            image={SpeakerImage}
            title={"Speakers"}
            target={"/speakers"}
          />
          <CategoryLink
            image={EarphoneImage}
            title={"Earphones"}
            target={"/earphones"}
          />
        </CategorieContainer>
      </Content>
    </>
  );
};

export default Home;
