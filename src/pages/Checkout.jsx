import CheckoutForm from "./checkout/CheckoutForm";
import Summary from "./checkout/Summary";
import { Content } from "../styles/shared-styles";

const Checkout = () => {
  return (
    <Content>
      <CheckoutForm />
      <Summary />
    </Content>
  );
};

export default Checkout;
