import React, { useEffect } from "react";

import HeroImage from "../assets/images/hero-page.png";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { fetchProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";
import "../styles/home.css";

const Home = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <main className="home" role="main" aria-label="Homepage">
      <section className="home__wrapper">
        <div className="home__container">
          <aside
            className="home__sidebar"
            aria-labelledby="category-heading"
            role="complementary"
          >
            <div id="category-heading" className="home__category-header">
              SHOP BY CATEGORIES
            </div>

            <ul
              className="home__category-list"
              role="navigation"
              aria-label="Product categories"
            >
              {Categories.map((category, index) => (
                <li key={index} className="home__category-item">
                  <div className="home__category-bullet"></div>
                  <span className="home__category-text">{category}</span>
                </li>
              ))}
            </ul>
          </aside>

          <section className="home__hero" aria-label="Promotional banner">
            <img
              src={HeroImage}
              alt="Featured e-commerce products"
              className="home__hero-image"
            />

            <div className="home__hero-content">
              <p className="home__hero-subtitle">Explore Our Products</p>
              <h2 className="home__hero-title">WELCOME TO E-SHOP</h2>
              <p className="home__hero-highlight">MILLION+ PRODUCTS</p>

              <button className="home__hero-button">SHOP NOW</button>
            </div>
          </section>
        </div>

        <InfoSection />
        <CategorySection />

        <section
          className="home__products"
          aria-labelledby="top-products-heading"
        >
          <div className="home__products-container">
            <h2 id="top-products-heading" className="home__products-title">
              Top Products
            </h2>

            {loading && <p>Loading products...</p>}
            {error && <p>Error: {error}</p>}

            <div
              className="home__products-grid"
              role="list"
              aria-label="Top products"
            >
              {products.slice(0, 5).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </section>

      <Shop />
    </main>
  );
};

export default Home;
