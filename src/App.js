import { GlobalStyle } from "./styles/global-styles";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </>
);

export default App;
