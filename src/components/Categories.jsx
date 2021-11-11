import React from "react";
import { CATEGORIES } from "../constants/categories";

const Categories = ({ activeCategory, setActiveCategory }) => {
  return (
    <ul className="Categories">
      {Object.keys(CATEGORIES).map((category) => (
        <li
          className={activeCategory === category ? "active" : ""}
          key={category}
          onClick={() => setActiveCategory(category)}
        >
          {CATEGORIES[category]}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
