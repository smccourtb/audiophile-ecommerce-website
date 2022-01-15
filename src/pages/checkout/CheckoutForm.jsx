import styled from "styled-components/macro";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import NiceModal from "@ebay/nice-modal-react";
import CartModal from "../../components/CartModal";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 32px;
  background: #ffffff;
  border-radius: 8px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #ffffff;
  border-radius: 8px;
`;

const SectionLabel = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 25px;
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
  color: ${({ error }) => error && "#CD2C2C"};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  color: ${({ error }) => error && "#CD2C2C"};
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
  box-sizing: border-box;
  border-radius: 8px;
  padding: 18px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
  caret-color: #d87d4a;
  border: ${({ error }) => (error ? "2px solid #CD2C2C" : "1px solid #cfcfcf")};

  :focus {
    outline: none;
    border: ${({ error }) =>
      error ? "2px solid #CD2C2C" : "1px solid #d87d4a"};
  }

  :hover {
    border: ${({ error }) => !error && "1px solid #d87d4a"};
    cursor: pointer;
  }
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

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ error }) => error && "#CD2C2C"};
`;

const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  letter-spacing: -0.214286px;
`;

const CheckoutForm = () => {
  const [state, setState] = useState(true);
  const showCartModal = () => {
    // Show a modal with arguments passed to the component as props
    NiceModal.show(CartModal);
    document.querySelector("body").style.overflow = "hidden";
  };
  const { handleChange, handleSubmit, errors, data } = useForm({
    validations: {
      name: {
        pattern: {
          value: "^[A-Za-z]*$",
          message: "Wrong format",
        },
        required: {
          value: true,
          message: "Wrong format",
        },
      },
      email: {
        // pattern: {
        //   value: "/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/",
        //   message: "Wrong format",
        // },
        required: {
          value: true,
          message: "Wrong format",
        },
      },
      phone: {
        // pattern: {
        //   value: "^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$",
        //   message: "Wrong format",
        // },
        required: {
          value: true,
          message: "Wrong format",
        },
      },
      address: {
        required: {
          value: true,
          message: "Wrong format",
        },
      },
      zip: {
        required: {
          value: true,
          message: "Wrong format",
        },
        custom: {
          isValid: (value) => value.length > 4,
          message: "Needs to be at least 5 digits.",
        },
      },
      city: {
        required: {
          value: true,
          message: "Wrong format",
        },
      },
      country: {
        required: {
          value: true,
          message: "Wrong format",
        },
      },
    },
  });
  return (
    <FormContainer>
      <FormTitle>Checkout</FormTitle>
      <form
        noValidate
        id={"checkout"}
        style={{ display: "flex", flexDirection: "column", gap: "32px" }}
        onSubmit={handleSubmit}
      >
        <SectionContainer>
          <SectionLabel>Billing Details</SectionLabel>

          <InputContainer error={errors.name}>
            <LabelContainer error={errors.name}>
              <InputLabel error={errors.name} htmlFor="name">
                Name
              </InputLabel>
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </LabelContainer>
            <StyledInput
              error={errors.name}
              value={data.name || ""}
              onChange={handleChange("name")}
              id={"name"}
              name="name"
              type="text"
            />
          </InputContainer>

          <InputContainer>
            <LabelContainer error={errors.email}>
              <InputLabel error={errors.email} htmlFor="email">
                Email Address
              </InputLabel>
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </LabelContainer>
            <StyledInput
              error={errors.email}
              value={data.email || ""}
              onChange={handleChange("email")}
              name="email"
              type="email"
            />
          </InputContainer>

          <InputContainer>
            <LabelContainer error={errors.phone}>
              <InputLabel error={errors.phone} htmlFor="phone">
                Phone Number
              </InputLabel>
              {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
            </LabelContainer>
            <StyledInput
              error={errors.phone}
              value={data.phone || ""}
              onChange={handleChange("phone")}
              name="phone"
              type="tel"
            />
          </InputContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionLabel>Shipping Info</SectionLabel>

          <InputContainer>
            <LabelContainer error={errors.address}>
              <InputLabel error={errors.address} htmlFor="address">
                Your Address
              </InputLabel>
              {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
            </LabelContainer>
            <StyledInput
              error={errors.address}
              value={data.address || ""}
              onChange={handleChange("address")}
              name="address"
              type="text"
            />
          </InputContainer>

          <InputContainer>
            <LabelContainer error={errors.zip}>
              <InputLabel error={errors.zip} htmlFor="zip">
                ZIP Code
              </InputLabel>
              {errors.zip && <ErrorMessage>{errors.zip}</ErrorMessage>}
            </LabelContainer>
            <StyledInput
              error={errors.zip}
              value={data.zip || ""}
              onChange={handleChange("zip")}
              id={"zip"}
              name="zip"
              type="text"
            />
          </InputContainer>

          <InputContainer>
            <LabelContainer error={errors.city}>
              <InputLabel error={errors.city} htmlFor="city">
                City
              </InputLabel>
              {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
            </LabelContainer>
            <StyledInput
              error={errors.city}
              value={data.city || ""}
              onChange={handleChange("city")}
              name="city"
              type="text"
            />
          </InputContainer>

          <InputContainer>
            <LabelContainer error={errors.country}>
              <InputLabel error={errors.country} htmlFor="country">
                Country
              </InputLabel>
              {errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
            </LabelContainer>
            <StyledInput
              error={errors.country}
              value={data.country || ""}
              onChange={handleChange("country")}
              name="country"
              type="text"
            />
          </InputContainer>
        </SectionContainer>

        <SectionContainer>
          <SectionLabel>Payment Details</SectionLabel>

          <InputLabel>Payment Method</InputLabel>
          <StyledInput
            as="div"
            style={{ display: "flex", gap: "16px", alignItems: "center" }}
          >
            {/*TODO: create custom radio selector*/}
            <input
              name="payment"
              id="e-money"
              value="e-money"
              type="radio"
              defaultChecked={true}
              onClick={() => setState(true)}
            />
            <PaymentLabel htmlFor="e-money">e-Money</PaymentLabel>
          </StyledInput>
          <StyledInput
            as="div"
            style={{ display: "flex", gap: "16px", alignItems: "center" }}
          >
            <input
              name="payment"
              id="cash"
              value="cash"
              type="radio"
              onClick={() => setState(false)}
            />
            <PaymentLabel htmlFor="cash">Cash on Delivery</PaymentLabel>
          </StyledInput>
        </SectionContainer>

        <SectionContainer>
          {state ? (
            <>
              <InputContainer>
                <InputLabel htmlFor="number">e-Money Number</InputLabel>
                <StyledInput name="number" type="text" />
              </InputContainer>

              <InputContainer>
                <InputLabel htmlFor="pin">e-Money PIN</InputLabel>
                <StyledInput name="pin" type="text" />
              </InputContainer>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                alignItems: "center",
              }}
            >
              <img src="../../assets/cart/delivery.png" alt="" />
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </SectionContainer>
      </form>
    </FormContainer>
  );
};

export default CheckoutForm;
