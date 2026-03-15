import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";
import { clearCart } from "../redux/cartSlice";

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrder = () => {
    if (!cart.products.length) return alert("Cart is empty!");

    // Create order object
    const newOrder = {
      products: cart.products,
      orderNumber: `ORD-${Date.now()}`,
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
      paymentMethod,
    };

    // Pass order to parent component / context
    setOrder(newOrder);

    // Clear cart
    dispatch(clearCart());

    // Navigate to order confirmation
    navigate("/order-confirmation");
  };

  return (
    <main className="checkout" role="main" aria-labelledby="checkout-title">
      <h3 id="checkout-title" className="checkout__title">
        CHECKOUT
      </h3>

      <div className="checkout__layout">
        {/* LEFT SIDE */}
        <div className="checkout__form">
          {/* Billing */}
          <div className="checkout__section">
            <div
              className="checkout__section-header"
              role="button"
              tabIndex="0"
              aria-expanded={billingToggle}
              aria-controls="billing-content"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="checkout__section-title">Billing Information</h3>
              {billingToggle ? (
                <FaAngleDown aria-hidden="true" />
              ) : (
                <FaAngleUp aria-hidden="true" />
              )}
            </div>

            <div
              id="billing-content"
              className={`checkout__section-content ${billingToggle ? "" : "hidden"}`}
            >
              <label className="checkout__label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="checkout__input"
              />

              <label className="checkout__label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="checkout__input"
              />

              <label className="checkout__label">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone #"
                className="checkout__input"
              />
            </div>
          </div>

          {/* Shipping */}
          <div className="checkout__section">
            <div
              className="checkout__section-header"
              role="button"
              tabIndex="0"
              aria-expanded={shippingToggle}
              aria-controls="shipping-content"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="checkout__section-title">Shipping Information</h3>
              {shippingToggle ? (
                <FaAngleDown aria-hidden="true" />
              ) : (
                <FaAngleUp aria-hidden="true" />
              )}
            </div>

            <div
              id="shipping-content"
              className={`checkout__section-content ${shippingToggle ? "" : "hidden"}`}
            >
              <label className="checkout__label">Address</label>
              <input
                type="text"
                placeholder="Enter Address"
                className="checkout__input"
                onChange={(e) =>
                  setShippingInfo({ ...shippingInfo, address: e.target.value })
                }
              />

              <label className="checkout__label">City</label>
              <input
                type="text"
                placeholder="Enter City"
                className="checkout__input"
                onChange={(e) =>
                  setShippingInfo({ ...shippingInfo, city: e.target.value })
                }
              />

              <label className="checkout__label">Zip Code</label>
              <input
                type="text"
                placeholder="Enter Zip Code"
                className="checkout__input"
                onChange={(e) =>
                  setShippingInfo({ ...shippingInfo, zip: e.target.value })
                }
              />
            </div>
          </div>

          {/* Payment */}
          <div className="checkout__section">
            <div
              className="checkout__section-header"
              role="button"
              tabIndex="0"
              aria-expanded={paymentToggle}
              aria-controls="payment-content"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="checkout__section-title">Payment Method</h3>
              {paymentToggle ? (
                <FaAngleDown aria-hidden="true" />
              ) : (
                <FaAngleUp aria-hidden="true" />
              )}
            </div>

            <div
              id="payment-content"
              className={`checkout__section-content ${paymentToggle ? "" : "hidden"}`}
            >
              <div className="checkout__radio">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="checkout__radio-label">
                  Cash on Delivery
                </label>
              </div>

              <div className="checkout__radio">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="checkout__radio-label">Debit Card</label>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="checkout__summary" aria-label="Order Summary">
          <h3 className="checkout__summary-title">Order Summary</h3>

          <div className="checkout__products">
            {cart.products.map((product) => (
              <div key={product.id} className="checkout__product">
                <div className="checkout__product-info">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="checkout__product-image"
                  />
                  <div className="checkout__product-details">
                    <h4 className="checkout__product-name">{product.name}</h4>
                    <p className="checkout__product-meta">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="checkout__product-price">
                  ${(product.price * product.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="checkout__total">
            <div className="checkout__total-row">
              <span>Total Price:</span>
              <span className="checkout__total-price">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            className="checkout__button"
            onClick={handleOrder}
            aria-label="Place order"
          >
            Place Order
          </button>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
