import React from "react";
import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import "../styles/info-section.css";
const InfoSection = () => {
  const infoItems = [
    {
      icon: (
        <FaShippingFast className="info-section__icon" aria-hidden="true" />
      ),
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="info-section__icon" aria-hidden="true" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: (
        <FaMoneyBill1Wave className="info-section__icon" aria-hidden="true" />
      ),
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: <FaLock className="info-section__icon" aria-hidden="true" />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
    {
      icon: <FaTag className="info-section__icon" aria-hidden="true" />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];

  return (
    <section
      id="info-section"
      className="info-section"
      aria-label="Information highlights"
    >
      <div className="info-section__container">
        {infoItems.map((item, index) => (
          <article
            key={index}
            className="info-section__item"
            role="group"
            aria-label={item.title}
          >
            {item.icon}
            <h3 className="info-section__title">{item.title}</h3>
            <p className="info-section__description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
