import { CloseSvg } from "../svg/CloseSvg";
import { ModalStyled } from "./styled_components/ModalStyled";
import { OverlayStyled } from "./styled_components/OverlayStyled";
import ReactDom from "react-dom";

const Modal = ({ modalOpen, onClose }) => {
  if (!modalOpen) return null;
  return ReactDom.createPortal(
    <>
      <OverlayStyled />
      <ModalStyled>
        <button onClick={onClose}>
          <CloseSvg />
        </button>
        hola
      </ModalStyled>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
