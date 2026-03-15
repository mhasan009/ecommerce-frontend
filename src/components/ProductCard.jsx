import React from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/product-card.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    dispatch(addToCart(product));
    alert("Product Added Successfully!");
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card"
      aria-label={`View details for ${product.name}`}
    >
      <article className="product-card__container">
        <div className="product-card__image-wrapper">
          <img
            src={product.image}
            alt={`Image of ${product.name}`}
            className="product-card__image"
          />
        </div>
        <h3 className="product-card__title">{product.name}</h3>

        <p className="product-card__price">${product.price}</p>

        <div className="product-card__rating">
          <FaStar className="product-card__star" />
          <FaStar className="product-card__star" />
          <FaStar className="product-card__star" />
          <FaStar className="product-card__star" />
        </div>

        <button
          type="button"
          className="product-card__add-to-cart group"
          onClick={handleAddToCart}
        >
          <span className="product-card__add-icon">+</span>
          <span className="product-card__add-text">Add to cart</span>
        </button>
      </article>
    </Link>
  );
};

export default ProductCard;
