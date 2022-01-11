import Subheader from "./Subheader";
import CategoryLinks from "./CategoryLinks";

import FeaturedProducts from "./FeaturedProducts";
import Story from "./Story";
import { Content } from "../styles/shared-styles";
import { useLayoutEffect } from "react";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
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
