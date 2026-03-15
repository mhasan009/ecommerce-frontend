import React from "react";
import ManCategory from "../assets/images/man.png";
import WomanCategory from "../assets/images/woman.png";
import KidCategory from "../assets/images/kid.png";
import "../styles/category-section.css";

const categories = [
  {
    title: "Men",
    imageUrl: ManCategory,
  },
  {
    title: "Women",
    imageUrl: WomanCategory,
  },
  {
    title: "Kids",
    imageUrl: KidCategory,
  },
];

const CategorySection = () => {
  return (
    <section
      className="category-section"
      aria-labelledby="category-section-heading"
      role="region"
    >
      <h2 id="category-section-heading" className="sr-only">
        Product Categories
      </h2>

      <div className="category-section__grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-section__card"
            role="button"
            tabIndex="0"
            aria-label={`View all products for ${category.title}`}
          >
            <img
              src={category.imageUrl}
              alt={`${category.title} clothing category`}
              className="category-section__image"
            />

            <div className="category-section__content">
              <p className="category-section__title">{category.title}</p>
              <p className="category-section__link">View All</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
