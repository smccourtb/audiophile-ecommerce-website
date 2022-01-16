import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { useContext } from "react";
import shopContext from "../context/ShopContext";
import CartItem from "./cartModal/CartItem";
import {
  calculateTotal,
  CheckoutButton,
  ModalBackground,
  ModalContainer,
} from "./CartModal";
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";

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
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14286px;
    margin-bottom: -8px;
  }
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
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0;
    margin-bottom: 22px;
  }
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
  @media (min-width: 768px) {
    height: 100%;
    align-items: flex-start;
    justify-content: center;
    border-radius: 0 8px 8px 0;
    padding: 41px 73px 42px 24px;
    margin: 0;
  }
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
  @media (min-width: 768px) {
    padding: 25px 0 0 0;
  }
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

const ConfirmationModalContainer = styled(ModalContainer)`
  padding: 32px;
  @media (min-width: 768px) {
    padding: 48px;
    width: 100%;
    margin: 0;
  }
`;

const ConfirmationModalBackground = styled(ModalBackground)`
  padding: 90px 114px 0;
`;

export const ConfirmationModal = NiceModal.create(() => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
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
    <ConfirmationModalBackground>
      <ConfirmationModalContainer>
        <Circle />
        <ThankYou>{`THANK YOU \nFOR YOUR ORDER`}</ThankYou>
        <Paragraph>You will receive an email confirmation shortly.</Paragraph>
        {isTablet ? (
          <ColumnFlexContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "24px",
                flexGrow: "1",
                gap: "24px",
              }}
            >
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
            </div>
            <PriceContainer>
              <TotalHeader>GRAND TOTAL</TotalHeader>
              <TotalPrice>$ 5,446</TotalPrice>
            </PriceContainer>
          </ColumnFlexContainer>
        ) : (
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
              { purchasedItems }
            )}
            <PriceContainer>
              <TotalHeader>GRAND TOTAL</TotalHeader>
              <TotalPrice>{calculateTotal(context.cart)}</TotalPrice>
            </PriceContainer>
          </ColumnFlexContainer>
        )}
        <CheckoutButton primary={"true"} onClick={modal.remove} to={"/"}>
          Back To Home
        </CheckoutButton>
      </ConfirmationModalContainer>
    </ConfirmationModalBackground>
  );
});
