import Subheader from "./Subheader";
import CategoryLinks from "./CategoryLinks";

import FeaturedProducts from "./FeaturedProducts";
import Story from "./Story";
import { Content } from "../styles/shared-styles";

const Home = () => {
  return (
    <>
      <Subheader />
      <Content>
        <CategoryLinks />
        <FeaturedProducts />
        <Story />
      </Content>
    </>
  );
};

export default Home;
