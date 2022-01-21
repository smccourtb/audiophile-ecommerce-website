import Subheader from "./home/Subheader";
import CategoryLinks from "../components/CategoryLinks";

import FeaturedProducts from "./home/FeaturedProducts";
import Story from "../components/Story";
import { ContentContainer } from "../styles/shared-styles";

const Home = () => {
  return (
    <>
      <Subheader />
      <ContentContainer>
        <CategoryLinks />
        <FeaturedProducts />
        <Story />
      </ContentContainer>
    </>
  );
};

export default Home;
