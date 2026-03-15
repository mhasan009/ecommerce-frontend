import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import "../styles/shop.css";

const Shop = () => {
  const products = useSelector((state) => state.product);

  return (
    <main className="shop" role="main" aria-labelledby="shop-title">
      <h2 id="shop-title" className="shop__title">
        Shop
      </h2>

      <div className="shop__grid" role="list" aria-label="Product listing">
        {products.products.map((product) => (
          <ProductCard key={product.id} product={product} role="listitem" />
        ))}
      </div>
    </main>
  );
};

export default Shop;
