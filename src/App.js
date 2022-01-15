import { GlobalStyle } from "./styles/global-styles";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
// main pages of content
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

import { ContentContainer } from "./styles/shared-styles";
import data from "./data.json";

const headphoneData = data
  .filter((product) => product.category === "headphones")
  .sort((a, b) => b.id - a.id);

const speakerData = data
  .filter((product) => product.category === "speakers")
  .sort((a, b) => b.id - a.id);

const earphoneData = data.filter((product) => product.category === "earphones");

const categories = [headphoneData, speakerData, earphoneData];

const App = () => {
  const productPages = data.map((product) => (
    <Route
      key={product.id}
      path={`/${product.slug}`}
      element={<ProductDetail data={product} />}
    />
  ));

  const categoryPages = categories.map((category) => (
    <Route
      key={category[0].id}
      path={category[0].category}
      element={<CategoryPage data={category} />}
    />
  ));

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        {categoryPages}
        {productPages}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
