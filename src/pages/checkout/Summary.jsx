import styled from "styled-components/macro";
import { CheckoutButton } from "../../components/CartModal";
import { useContext } from "react";
import ShopContext from "../../context/ShopContext";
import CartItem from "../../components/cartModal/CartItem";

const SummaryContainer = styled.div`
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const SummaryTitle = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  letter-spacing: 1.28571px;
  text-transform: uppercase;

  color: #000000;
`;

const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Subtotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: -8px;
`;

const PriceLabel = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Price = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  text-align: right;
  text-transform: uppercase;

  color: ${({ orange }) => (orange ? "#D87D4A" : "#000000")};
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Summary = () => {
  const context = useContext(ShopContext);
  const cartItems = context.cart.map((item) => (
    <CartItem
      checkout
      key={item.id}
      id={item.id}
      quantity={item.quantity}
      name={item.name}
      price={item.price}
      slug={item.slug}
    />
  ));
  const calculateTotalPrice = () => {
    let total = 0;
    for (let i of context.cart) {
      total += i.price * i.quantity;
      console.log(total);
    }
    return total;
  };
  return (
    <SummaryContainer>
      <SummaryTitle>Summary</SummaryTitle>
      <ItemsContainer>{cartItems}</ItemsContainer>
      <Subtotal>
        <PriceItem>
          <PriceLabel>TOTAL</PriceLabel>
          <Price>{`$ ${calculateTotalPrice()}`}</Price>
        </PriceItem>
        <PriceItem>
          <PriceLabel>SHIPPING</PriceLabel>
          <Price>$ 50</Price>
        </PriceItem>
        <PriceItem>
          <PriceLabel>VAT (INCLUDED)</PriceLabel>
          <Price>$ {calculateTotalPrice() * 0.2}</Price>
        </PriceItem>
      </Subtotal>
      <PriceItem>
        <PriceLabel>GRAND TOTAL</PriceLabel>
        <Price orange>$ {calculateTotalPrice() + 50}</Price>
      </PriceItem>
      <CheckoutButton as="button" primary="true" form="checkout" type="submit">
        CONTINUE & PAY
      </CheckoutButton>
    </SummaryContainer>
  );
};

export default Summary;
