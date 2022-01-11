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
      </Routes>
    </ContentContainer>
    <Footer />
  </>
);

export default App;
