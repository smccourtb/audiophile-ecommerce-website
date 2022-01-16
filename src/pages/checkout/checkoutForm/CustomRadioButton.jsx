import { PaymentLabel } from "../CheckoutForm";
import styled from "styled-components/macro";

const Checked = styled.div`
  height: 10px;
  width: 10px;
  background-color: #d87d4a;
  border-radius: 50%;
`;

const CustomRadio = styled.div`height: 20px;
  width: 20px;
  border: 1px solid #CFCFCF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;,`;

const Container = styled.div`
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 18px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
  caret-color: #d87d4a;
  display: flex;

  border: ${({ error }) => (error ? "2px solid #CD2C2C" : "1px solid #cfcfcf")};

  :hover {
    border: ${({ error }) => !error && "1px solid #d87d4a"};
    cursor: pointer;
  }
`;
const CustomRadioButton = ({ name, label, value, isChecked, handleChange }) => {
  return (
    <Container onClick={handleChange}>
      <CustomRadio>{isChecked && <Checked />}</CustomRadio>
      <input
        style={{ opacity: "0" }}
        type="radio"
        className="custom-radio"
        name={name}
        id={value} // htmlFor targets this id.
      />
      <PaymentLabel htmlFor={value}>{label}</PaymentLabel>
    </Container>
  );
};

export default CustomRadioButton;
