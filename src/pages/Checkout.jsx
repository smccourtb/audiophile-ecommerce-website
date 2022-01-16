import CheckoutForm from "./checkout/CheckoutForm";
import Summary from "./checkout/Summary";
import { ContentContainer, GoBackLink } from "../styles/shared-styles";
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";

const CheckoutContainer = styled(ContentContainer)`
  padding: 16px 24px 97px;
  background: #f2f2f2;
  gap: 32px;
  @media (min-width: 768px) {
    padding: 48px 40px 116px 39px;
  }
  @media (min-width: 1024px) {
    padding: 79px 165px 141px 165px;
    flex-direction: row;
  }
`;
const Checkout = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <CheckoutContainer>
      {!isDesktop && (
        <GoBackLink style={{ marginBottom: "0" }} to={"/"}>
          Go Back
        </GoBackLink>
      )}

      <CheckoutForm />
      <Summary />
    </CheckoutContainer>
  );
};

export default Checkout;
