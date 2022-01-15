import CategoryLinks from "./categoryLink/CategoryLinks";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { ModalBackground, ModalContainer } from "./CartModal";

export const DropDownMenu = NiceModal.create(() => {
  const modal = useModal();
  return (
    <ModalBackground
      onClick={() => {
        document.querySelector("body").style.overflow = "visible";
        modal.remove();
      }}
    >
      <ModalContainer
        style={{ margin: "0px", borderRadius: "0 0 8px 8px" }}
        onClick={(e) => {
          e.stopPropagation();
          modal.remove();
        }}
      >
        <CategoryLinks />
      </ModalContainer>
    </ModalBackground>
  );
});
