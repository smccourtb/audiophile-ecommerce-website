import CategoryLink from "./categoryLinks/CategoryLink";
import styled from "styled-components/macro";

const CategoryContainer = styled.div`
  display: flex;
  gap: 68px;
  flex-direction: column;
  padding-top: 56px;
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
        image={
          "../../assets/shared/desktop/image-category-thumbnail-headphones.png"
        }
        title={"Headphones"}
        target={"/headphones"}
      />
      <CategoryLink
        image={"../assets/shared/desktop/image-category-thumbnail-speakers.png"}
        title={"Speakers"}
        target={"/speakers"}
      />
      <CategoryLink
        image={
          "../assets/shared/desktop/image-category-thumbnail-earphones.png"
        }
        title={"Earphones"}
        target={"/earphones"}
      />
    </CategoryContainer>
  );
};

export default CategoryLinks;
