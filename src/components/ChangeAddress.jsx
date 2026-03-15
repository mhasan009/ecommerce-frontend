import React, { useState } from "react";
import "../styles/change-address.css";

const ChangeAddress = ({ setAddress, setIsModalOpen }) => {
  const [newAddress, setNewAddress] = useState("");

  const onClose = () => {
    setAddress(newAddress);
    setIsModalOpen(false);
  };

  return (
    <div
      className="change-address"
      role="group"
      aria-labelledby="change-address-label"
    >
      <input
        type="text"
        placeholder="Enter New Address"
        className="change-address__input"
        aria-label="Enter new delivery address"
        onChange={(e) => setNewAddress(e.target.value)}
      />

      <div
        className="change-address__actions"
        role="group"
        aria-label="Address actions"
      >
        <button
          type="button"
          className="change-address__button change-address__button--cancel"
          aria-label="Cancel address change"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>

        <button
          type="button"
          className="change-address__button change-address__button--save"
          aria-label="Save new address"
          onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
