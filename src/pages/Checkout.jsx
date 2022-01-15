import CheckoutForm from "./checkout/CheckoutForm";
import Summary from "./checkout/Summary";
import { ContentContainer, GoBackLink } from "../styles/shared-styles";
import styled from "styled-components/macro";

const CheckoutContainer = styled(ContentContainer)`
  padding: 16px 24px 97px;
  background: #f2f2f2;
  gap: 32px;
  @media (min-width: 768px) {
    padding: 48px 40px 116px 39px;
  }
`;
const Checkout = () => {
  return (
    <CheckoutContainer>
      <GoBackLink to={"/"}>Go Back</GoBackLink>
      <CheckoutForm />
      <Summary />
    </CheckoutContainer>
  );
};

export default Checkout;
