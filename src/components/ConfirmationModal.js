import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { useContext } from "react";
import shopContext from "../context/ShopContext";
import CartItem from "./cartModal/CartItem";
import { CheckoutButton, ModalBackground, ModalContainer } from "./CartModal";
import styled from "styled-components/macro";

const Circle = styled.div`
  background: #d87d4a;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  transform: rotate(45deg);

  :before {
    content: "";
    position: absolute;
    width: 3.3px;
    height: 23px;
    background-color: #fff;
    left: 34px;
    top: 19px;
  }

  :after {
    content: "";
    position: absolute;
    width: 3.3px;
    height: 8px;
    background-color: #fff;
    left: 30px;
    top: 36.5px;
    transform: rotate(90deg);
  }
`;

const ThankYou = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: #000000;
  text-align: left;
  white-space: pre-wrap;
`;

const Paragraph = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const ColumnFlexContainer = styled.div`
  background: #f1f1f1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const TotalHeader = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const PriceContainer = styled.div`
  background: #000000;
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;
  padding: 15px 24px 19px;
  margin: 0 -24px -24px;
  gap: 8px;
`;

const TotalPrice = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-transform: uppercase;
  color: #ffffff;
`;

const ExtraItemsContainer = styled.div`
  padding: 12px 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#f1f1f1, #f1f1f1) 100% 1px no-repeat,
    rgba(215, 211, 211, 0.73);
`;

const ExtraItemsText = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;
export const ConfirmationModal = NiceModal.create(() => {
  const modal = useModal();
  const context = useContext(shopContext);

  const purchasedItems = context.cart.map((item) => (
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
  return (
    <ModalBackground>
      <ModalContainer style={{ padding: "32px 32px" }}>
        <Circle />
        <ThankYou>{`THANK YOU \nFOR YOUR ORDER`}</ThankYou>
        <Paragraph>You will receive an email confirmation shortly.</Paragraph>
        <ColumnFlexContainer>
          {purchasedItems.length > 1 ? (
            <>
              {purchasedItems[0]}
              <ExtraItemsContainer>
                <ExtraItemsText>{`and ${
                  context.cart.length - 1
                } other item(s)`}</ExtraItemsText>
              </ExtraItemsContainer>
            </>
          ) : (
            purchasedItems
          )}
          <PriceContainer>
            <TotalHeader>GRAND TOTAL</TotalHeader>
            <TotalPrice>$ 5,446</TotalPrice>
          </PriceContainer>
        </ColumnFlexContainer>
        <CheckoutButton primary onClick={modal.remove} to={"/"}>
          Back To Home
        </CheckoutButton>
      </ModalContainer>
    </ModalBackground>
  );
});
