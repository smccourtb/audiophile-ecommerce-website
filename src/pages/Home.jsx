import Subheader from "./home/Subheader";
import CategoryLinks from "../components/CategoryLinks";

import FeaturedProducts from "./home/FeaturedProducts";
import Story from "../components/Story";
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
