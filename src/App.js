import { GlobalStyle } from "./styles/global-styles";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
// main pages of content
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Checkout from "./pages/Checkout";
import { ContentContainer } from "./styles/shared-styles";
import data from "./data.json";
import ProductDetail from "./pages/ProductDetail";
import GlobalState from "./context/GlobalState";

const headphoneData = data
  .filter((product) => product.category === "headphones")
  .sort((a, b) => b.id - a.id);
const speakerData = data.filter((product) => product.category === "speakers");
const earphoneData = data.filter((product) => product.category === "earphones");
const categories = [headphoneData, speakerData, earphoneData];
const App = () => {
  const productPages = data.map((product) => (
    <Route
      path={`/${product.slug}`}
      element={<ProductDetail data={product} />}
    />
  ));

  const categoryPages = categories.map((category) => (
    <Route
      path={category[0].category}
      element={<CategoryPage data={category} />}
    />
  ));

  return (
    <GlobalState>
      <GlobalStyle />
      <Header />
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          {categoryPages}
          {productPages}
        </Routes>
      </ContentContainer>
      <Footer />
    </GlobalState>
  );
};

export default App;
