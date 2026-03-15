import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const [debitCard, setDebitCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrder = () => {
    if (!cart.products.length) return alert("Cart is empty!");

    if (paymentMethod === "dc") {
      // Validate debit card fields
      if (!debitCard.number || !debitCard.expiry || !debitCard.cvv) {
        return alert("Please fill in all debit card details.");
      }
    }

    const newOrder = {
      products: cart.products,
      orderNumber: `ORD-${Date.now()}`,
      billingInformation: billingInfo,
      shippingInformation: shippingInfo,
      paymentMethod,
      debitCard: paymentMethod === "dc" ? debitCard : null,
      totalPrice: cart.totalPrice,
    };

    setOrder(newOrder);
    dispatch(clearCart());
    navigate("/order-confirmation");
  };

  return (
    <main
      className="max-w-6xl mx-auto p-6"
      role="main"
      aria-labelledby="checkout-title"
    >
      <h1 id="checkout-title" className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* LEFT SIDE: Forms */}
        <div className="space-y-6">
          {/* Billing Section */}
          <section className="border rounded-lg shadow-sm">
            <button
              className="w-full px-4 py-3 flex justify-between items-center font-medium text-left"
              onClick={() => setBillingToggle(!billingToggle)}
              aria-expanded={billingToggle}
              aria-controls="billing-content"
            >
              <span>Billing Information</span>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </button>
            {billingToggle && (
              <div id="billing-content" className="p-4 space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={billingInfo.name}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, name: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={billingInfo.email}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, email: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={billingInfo.phone}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, phone: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            )}
          </section>

          {/* Shipping Section */}
          <section className="border rounded-lg shadow-sm">
            <button
              className="w-full px-4 py-3 flex justify-between items-center font-medium text-left"
              onClick={() => setShippingToggle(!shippingToggle)}
              aria-expanded={shippingToggle}
              aria-controls="shipping-content"
            >
              <span>Shipping Information</span>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </button>
            {shippingToggle && (
              <div id="shipping-content" className="p-4 space-y-4">
                <input
                  type="text"
                  placeholder="Address"
                  value={shippingInfo.address}
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                  className="w-full border rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="City"
                  value={shippingInfo.city}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={shippingInfo.zip}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, zip: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            )}
          </section>

          {/* Payment Section */}
          <section className="border rounded-lg shadow-sm">
            <button
              className="w-full px-4 py-3 flex justify-between items-center font-medium text-left"
              onClick={() => setPaymentToggle(!paymentToggle)}
              aria-expanded={paymentToggle}
              aria-controls="payment-content"
            >
              <span>Payment Method</span>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </button>
            {paymentToggle && (
              <div id="payment-content" className="p-4 space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <label>Cash on Delivery</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                  />
                  <label>Debit Card</label>
                </div>

                {/* Debit Card Inputs */}
                {paymentMethod === "dc" && (
                  <div className="space-y-3 mt-2">
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={debitCard.number}
                      onChange={(e) =>
                        setDebitCard({ ...debitCard, number: e.target.value })
                      }
                      className="w-full border rounded px-3 py-2"
                    />
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={debitCard.expiry}
                        onChange={(e) =>
                          setDebitCard({ ...debitCard, expiry: e.target.value })
                        }
                        className="w-1/2 border rounded px-3 py-2"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        value={debitCard.cvv}
                        onChange={(e) =>
                          setDebitCard({ ...debitCard, cvv: e.target.value })
                        }
                        className="w-1/2 border rounded px-3 py-2"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>

        {/* RIGHT SIDE: Order Summary */}
        <aside className="border rounded-lg shadow-sm p-4 space-y-4">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="space-y-2">
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <span className="font-medium">
                  ${(product.price * product.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t pt-2 flex justify-between font-semibold">
            <span>Total:</span>
            <span>${cart.totalPrice.toFixed(2)}</span>
          </div>

          <button
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 mt-4"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </aside>
      </div>
    </main>
  );
};

export default Checkout;
