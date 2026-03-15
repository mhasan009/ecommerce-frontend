import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import NoProduct from "../assets/images/not_found.png";
import "../styles/filter-data.css";

const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);

  return (
    <main
      className="filter-data"
      role="main"
      aria-labelledby="filter-data-title"
    >
      {filterProducts.length > 0 ? (
        <>
          <h2 id="filter-data-title" className="filter-data__title">
            Shop
          </h2>

          <div
            className="filter-data__grid"
            role="list"
            aria-label="Filtered product list"
          >
            {filterProducts.map((product) => (
              <ProductCard key={product.id} product={product} role="listitem" />
            ))}
          </div>
        </>
      ) : (
        <div
          className="filter-data__empty"
          role="status"
          aria-live="polite"
          aria-label="No products found"
        >
          <img
            src={NoProduct}
            alt="No products available"
            className="filter-data__empty-image"
          />
        </div>
      )}
    </main>
  );
};

export default FilterData;
