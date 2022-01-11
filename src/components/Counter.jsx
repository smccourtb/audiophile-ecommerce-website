import styled from "styled-components/macro";
import { useState } from "react";

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
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.25;
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
const Counter = () => {
  const [amount, setAmount] = useState(1);
  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };
  return (
    <CounterContainer>
      <Button onClick={decreaseAmount}>-</Button>
      <Number>{amount}</Number>
      <Button onClick={() => setAmount((prevAmount) => prevAmount + 1)}>
        +
      </Button>
    </CounterContainer>
  );
};

export default Counter;
