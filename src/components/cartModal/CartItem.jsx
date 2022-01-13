import Counter from "../Counter";
import styled from "styled-components/macro";
import useCount from "../../hooks/useCount";

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  margin-left: 16px;
  justify-content: center;
`;

const Name = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
`;

const Price = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 25px;
  /* identical to box height, or 179% */

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Image = styled.img`
  border-radius: 8px;
  background: #f1f1f1;
  height: 64px;
`;
const CartItem = ({ id, quantity, name, price, slug }) => {
  const [count, increment, decrement] = useCount(quantity);

  const shortenProductName = () => {
    switch (name) {
      case "YX1 Wireless Earphones":
        return "YX1";
      case "XX59 Headphones":
        return "XX59";
      case "XX99 Mark I Headphones":
        return "XX99 MK I";
      case "XX99 Mark II Headphones":
        return "XX99 MK II";
      case "ZX7 Speaker":
        return "ZX7";
      case "ZX9 Speaker":
        return "ZX9";
      default:
        return "FIX ME";
    }
  };
  return (
    <ItemContainer>
      <Image src={`./assets/cart/image-${slug}.jpg`} alt="" />
      <InfoContainer>
        <Name>{shortenProductName(name)}</Name>
        <Price>{`$ ${price}`}</Price>
      </InfoContainer>
      <Counter
        id={id}
        cart={"true"}
        count={count}
        increment={increment}
        decrement={decrement}
      />
    </ItemContainer>
  );
};

export default CartItem;
