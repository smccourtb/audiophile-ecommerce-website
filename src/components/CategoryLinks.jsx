import CategoryLink from "./categoryLinks/CategoryLink";
import HeadphoneImage from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakerImage from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphoneImage from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import styled from "styled-components/macro";

const CategoryContainer = styled.div`
  display: flex;
  gap: 68px;
  flex-direction: column;
  padding: 56px 0 67px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }

  @media (min-width: 1024px) {
    gap: 30px;
  }
`;

const CategoryLinks = () => {
  return (
    <CategoryContainer>
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
    </CategoryContainer>
  );
};

export default CategoryLinks;
