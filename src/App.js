import styled from "styled-components/macro";
import { GlobalStyle } from "./styles/global-styles";

const Container = styled.div`
  height: 100px;
  width: 200px;
  background-color: blue;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <p style={{ fontWeight: "700" }}>Hello World</p>
      <p>Hello World</p>
    </Container>
  </>
);

export default App;
