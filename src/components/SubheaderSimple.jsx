import styled from "styled-components/macro";

const Container = styled.div`
  background-color: #000000;
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    height: 246px;
  }
`;

const HeaderText = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1.42857px;
  text-transform: uppercase;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`;

const SubheaderSimple = ({ text }) => {
  return (
    <Container>
      <HeaderText>{text}</HeaderText>
    </Container>
  );
};

export default SubheaderSimple;
