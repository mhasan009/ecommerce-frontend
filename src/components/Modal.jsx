import React from "react";
import "../styles/modal.css";

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal__content">
        <button
          type="button"
          className="modal__close-button"
          aria-label="Close modal dialog"
          onClick={() => setIsModalOpen(false)}
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
