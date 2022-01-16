import NiceModal, { useModal } from "@ebay/nice-modal-react";
import CartItem from "./cartModal/CartItem";
import { StyledButton } from "../styles/shared-styles";
import styled from "styled-components/macro";
import ShopContext from "../context/ShopContext";
import { useContext } from "react";

export const ModalBackground = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  backdrop-filter: brightness(30%);
  z-index: 2;
  position: fixed;
  top: 90px;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  background: #ffffff;
  border-radius: 8px;
  margin: 24px;
  gap: 32px;
  @media (min-width: 768px) {
    width: 377px;
    margin-left: auto;
  }
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const ModalHeaderLabel = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  letter-spacing: 1.28571px;
  text-transform: uppercase;

  color: #000000;
`;

export const CheckoutButton = styled(StyledButton)`
  width: 100%;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalLabel = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const TotalPrice = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #000000;
`;

const RemoveAllButton = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  background: none;
  border: none;
  text-decoration-line: underline;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  transition: color 0.2s ease-out;
  cursor: pointer;

  :hover {
    color: #d87d4a;
  }
`;
export const calculateTotal = (contents) => {
  let total = 0;
  for (let i of contents) {
    const itemTotal = i.price * i.quantity;
    total += itemTotal;
  }
  return total;
};

const CartModal = NiceModal.create(() => {
  const modal = useModal();
  const context = useContext(ShopContext);

  const items = context.cart.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      quantity={item.quantity}
      name={item.name}
      price={item.price}
      slug={item.slug}
    />
  ));
  return (
    <ModalBackground
      onClick={() => {
        document.querySelector("body").style.overflow = "visible";
        modal.remove();
      }}
    >
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ModalHeader>
          <ModalHeaderLabel>Cart ({context.cart.length})</ModalHeaderLabel>
          <RemoveAllButton onClick={context.clearCart.bind(this)}>
            Remove all
          </RemoveAllButton>
        </ModalHeader>

        {items}
        <TotalContainer>
          <TotalLabel>TOTAL</TotalLabel>
          <TotalPrice>{`$ ${calculateTotal(context.cart)}`}</TotalPrice>
        </TotalContainer>
        <CheckoutButton
          primary={"true"}
          to={"/checkout"}
          onClick={() => {
            document.querySelector("body").style.overflow = "visible";
            modal.remove();
          }}
        >
          CHECKOUT
        </CheckoutButton>
      </ModalContainer>
    </ModalBackground>
  );
});

export default CartModal;
