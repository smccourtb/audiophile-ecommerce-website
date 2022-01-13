import styled from "styled-components/macro";
import { useContext } from "react";
import ShopContext from "../context/ShopContext";

const CounterContainer = styled.div`
  width: ${({ cart }) => (cart ? "96px" : "120px")};
  height: ${({ cart }) => (cart ? "32px" : "48px")};
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
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
`;

const Counter = ({ id, cart, increment, decrement, count }) => {
  const context = useContext(ShopContext);

  return (
    <CounterContainer cart={cart}>
      <Button
        onClick={() => {
          decrement();
          if (cart) {
            context.removeProductFromCart(id, count);
          }
        }}
      >
        -
      </Button>
      <Number>{count}</Number>
      <Button
        onClick={() => {
          increment();
          if (cart) {
            context.updateQuantity(id, count);
          }
        }}
      >
        +
      </Button>
    </CounterContainer>
  );
};

export default Counter;
