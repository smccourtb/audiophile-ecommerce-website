import { GlobalStyle } from "./styles/global-styles";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
// main pages of content
import Home from "./components/Home";
import HeadphonesPage from "./components/HeadphonesPage";
import SpeakersPage from "./components/SpeakersPage";
import EarphonesPage from "./components/EarphonesPage";
import Checkout from "./components/Checkout";
import { ContentContainer } from "./styles/shared-styles";
import data from "./data.json";
import ProductDetailPage from "./components/ProductDetailPage";

const headphoneData = [data[3], data[2], data[1]];
const speakerData = [data[4], data[5]];
const earphoneData = data[0];

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <ContentContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/headphones"
          element={<HeadphonesPage data={headphoneData} />}
        />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/xx59-headphones"
          element={<ProductDetailPage data={headphoneData[2]} />}
        />
        <Route
          path="/xx99-mark-two-headphones"
          element={<ProductDetailPage data={headphoneData[0]} />}
        />
        <Route
          path="/xx99-mark-one-headphones"
          element={<ProductDetailPage data={headphoneData[1]} />}
        />
        <Route
          path="/zx7-speaker"
          element={<ProductDetailPage data={speakerData[0]} />}
        />
        <Route
          path="/zx9-speaker"
          element={<ProductDetailPage data={speakerData[1]} />}
        />
        <Route
          path="/yx1-earphones"
          element={<ProductDetailPage data={earphoneData} />}
        />
      </Routes>
    </ContentContainer>
    <Footer />
  </>
);

export default App;
