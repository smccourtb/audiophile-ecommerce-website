import { GlobalStyle } from "./styles/global-styles";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
// main pages of content
import Home from "./components/Home";
import HeadphonesPage from "./components/HeadphonesPage";
import SpeakersPage from "./components/SpeakersPage";
import Earphones from "./components/Earphones";
import Checkout from "./components/Checkout";
import { ContentContainer } from "./styles/shared-styles";

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <ContentContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<HeadphonesPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </ContentContainer>
    <Footer />
  </>
);

export default App;
