import styled from "styled-components/macro";

const CounterContainer = styled.div`
  width: 120px;
  height: 48px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  width: 33%;
  height: 100%;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.25;
  cursor: pointer;
`;

const Number = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #000000;
`;
const Counter = ({ increment, decrement, count }) => {
  return (
    <CounterContainer>
      <Button onClick={decrement}>-</Button>
      <Number>{count}</Number>
      <Button onClick={increment}>+</Button>
    </CounterContainer>
  );
};

export default Counter;
