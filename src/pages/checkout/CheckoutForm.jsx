import styled from "styled-components/macro";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 32px;
`;
const SectionLabel = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 25px;
  /* identical to box height, or 192% */

  letter-spacing: 0.928571px;
  text-transform: uppercase;

  color: #d87d4a;
`;

const InputLabel = styled.label`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;

  color: #000000;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const PaymentLabel = styled.label`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;

  color: #000000;
`;

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #cfcfcf;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 18px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;

  color: #000000;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #ffffff;
  border-radius: 8px;
`;

const FormTitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
`;
const CheckoutForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <FormContainer>
      <FormTitle>Checkout</FormTitle>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "32px" }}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <SectionContainer>
          <SectionLabel>Billing Details</SectionLabel>
          <InputContainer>
            <InputLabel htmlFor="name">Name</InputLabel>
            <StyledInput name="name" type="text" required />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <StyledInput name="email" type="email" required />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="phone">Phone Number</InputLabel>
            <StyledInput name="phone" type="tel" required />
          </InputContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionLabel>Shipping Info</SectionLabel>
          <InputContainer>
            <InputLabel htmlFor="address">Your Address</InputLabel>
            <StyledInput name="address" type="text" required />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="zip">ZIP Code</InputLabel>
            <StyledInput name="zip" type="text" required />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="city">City</InputLabel>
            <StyledInput name="city" type="text" required />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="country">Country</InputLabel>
            <StyledInput name="country" type="text" required />
          </InputContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionLabel>Payment Details</SectionLabel>
          <InputLabel>Payment Method</InputLabel>
          <StyledInput
            as="div"
            style={{ display: "flex", gap: "16px", alignItems: "center" }}
          >
            <input
              name="payment"
              id="e-money"
              value="e-money"
              type="radio"
              defaultChecked={true}
            />
            <PaymentLabel htmlFor="e-money">e-Money</PaymentLabel>
          </StyledInput>
          <StyledInput
            as="div"
            style={{ display: "flex", gap: "16px", alignItems: "center" }}
          >
            <input name="payment" id="cash" value="cash" type="radio" />
            <PaymentLabel htmlFor="cash">Cash on Delivery</PaymentLabel>
          </StyledInput>
        </SectionContainer>
        <SectionContainer>
          <InputContainer>
            <InputLabel htmlFor="number">e-Money Number</InputLabel>
            <StyledInput name="number" type="text" />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="pin">e-Money PIN</InputLabel>
            <StyledInput name="pin" type="text" />
          </InputContainer>
        </SectionContainer>
      </form>
    </FormContainer>
  );
};

export default CheckoutForm;
