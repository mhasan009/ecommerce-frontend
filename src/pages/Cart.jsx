import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/images/emptycart.png";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Main Street, 0012");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <main className="cart" role="main" aria-labelledby="cart-title">
      {cart.products.length > 0 ? (
        <div className="cart__container">
          <h3 id="cart-title" className="cart__title">
            SHOPPING CART
          </h3>

          <div className="cart__layout">
            {/* LEFT CART PRODUCTS */}
            <section
              className="cart__products"
              aria-label="Shopping cart products"
            >
              <div className="cart__header">
                <p>PRODUCTS</p>

                <div className="cart__header-meta">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>

              <div className="cart__list">
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="cart__item"
                    role="group"
                    aria-label={`Cart item ${product.name}`}
                  >
                    <div className="cart__product">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="cart__product-image"
                      />

                      <div className="cart__product-info">
                        <h3 className="cart__product-name">{product.name}</h3>
                      </div>
                    </div>

                    <div className="cart__meta">
                      <p className="cart__price">${product.price}</p>

                      <div
                        className="cart__quantity"
                        role="group"
                        aria-label="Product quantity controls"
                      >
                        <button
                          className="cart__quantity-btn"
                          aria-label="Decrease quantity"
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                        >
                          -
                        </button>

                        <p className="cart__quantity-value">
                          {product.quantity}
                        </p>

                        <button
                          className="cart__quantity-btn"
                          aria-label="Increase quantity"
                          onClick={() => dispatch(increaseQuantity(product.id))}
                        >
                          +
                        </button>
                      </div>

                      <p className="cart__subtotal">
                        ${(product.quantity * product.price).toFixed(2)}
                      </p>

                      <button
                        className="cart__remove"
                        aria-label={`Remove ${product.name} from cart`}
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrashAlt aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* RIGHT CART SUMMARY */}
            <aside className="cart__summary" aria-label="Cart summary">
              <h3 className="cart__summary-title">CART TOTAL</h3>

              <div className="cart__summary-row">
                <span className="cart__summary-label">Total Items:</span>

                <span>{cart.totalQuantity}</span>
              </div>

              <div className="cart__shipping">
                <p>Shipping:</p>

                <p className="cart__shipping-address">
                  Shipping to:
                  <span className="cart__address">{address}</span>
                </p>

                <button
                  className="cart__change-address"
                  aria-label="Change shipping address"
                  onClick={() => setIsModalOpen(true)}
                >
                  Change Address
                </button>
              </div>

              <div className="cart__total">
                <span>Total Price:</span>

                <span className="cart__total-price">
                  {cart.totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                className="cart__checkout"
                aria-label="Proceed to checkout"
                onClick={() => navigate("/checkout")}
              >
                Proceed To Checkout
              </button>
            </aside>
          </div>

          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="cart__empty" role="status" aria-live="polite">
          <img
            src={EmptyCart}
            alt="Your shopping cart is empty"
            className="cart__empty-image"
          />
        </div>
      )}
    </main>
  );
};

export default Cart;
