import styled from "styled-components/macro";
import { GlobalStyle } from "./styles/global-styles";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100px;
  width: 200px;
  background-color: blue;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  </>
);

export default App;
