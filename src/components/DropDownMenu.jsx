import CategoryLinks from "./CategoryLinks";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { ModalBackground, ModalContainer } from "./CartModal";
import styled from "styled-components/macro";

const DropDownContainer = styled(ModalContainer)`
  margin: 0;
  border-radius: 0 0 8px 8px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 56px 40px 67px;
  }
`;
export const DropDownMenu = NiceModal.create(() => {
  const modal = useModal();
  return (
    <ModalBackground
      onClick={() => {
        document.querySelector("body").style.overflow = "visible";
        modal.remove();
      }}
    >
      <DropDownContainer
        onClick={(e) => {
          e.stopPropagation();
          modal.remove();
        }}
      >
        <CategoryLinks />
      </DropDownContainer>
    </ModalBackground>
  );
});
