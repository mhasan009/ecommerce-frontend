import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/order.css";

const Order = ({ order }) => {
  const navigate = useNavigate();
  return (
    <main className="order-confirmation container" role="main">
      <header className="order-confirmation__header">
        <h1 className="order-confirmation__title">Thank you for your order!</h1>

        <p className="order-confirmation__message">
          Your order has been placed successfully. You will receive an email
          confirmation shortly.
        </p>
      </header>

      <section className="order-summary" aria-labelledby="order-summary-title">
        <h2 id="order-summary-title" className="order-summary__title">
          Order Summary
        </h2>

        <p className="order-summary__number">
          <strong>Order Number:</strong> {order.orderNumber}
        </p>

        <section
          className="order-summary__shipping"
          aria-labelledby="shipping-title"
        >
          <h3 id="shipping-title" className="order-summary__subtitle">
            Shipping Information
          </h3>

          <address className="order-summary__address">
            <p>{order.shippingInformation.name}</p>
            <p>{order.shippingInformation.address}</p>
            <p>{order.shippingInformation.city}</p>
            <p>{order.shippingInformation.zip}</p>
          </address>
        </section>

        <section className="order-summary__items" aria-labelledby="items-title">
          <h3 id="items-title" className="order-summary__subtitle">
            Items Ordered
          </h3>

          <ul className="order-items">
            {order.products.map((product) => (
              <li key={product.id} className="order-items__item">
                <span>
                  {product.name} (x{product.quantity})
                </span>

                <span>${product.price * product.quantity}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="order-summary__total">
          <span>Total Price:</span>
          <span className="order-summary__price">
            ${order.totalPrice.toFixed(2)}
          </span>
        </div>

        <div className="order-summary__actions">
          <button className="btn btn--success">Track Order</button>

          <button className="btn btn--danger" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      </section>
    </main>
  );
};

export default Order;
