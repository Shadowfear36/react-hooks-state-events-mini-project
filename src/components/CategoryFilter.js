import React from "react";

function CategoryFilter({ categories, selectedCategory, handleSelectedCategory }) {

  const handleClass = (category) => {
    handleSelectedCategory(category);
  }

  const renderCategories = categories.map(category => (
    <button className={selectedCategory === category? "selected":null}onClick={() => handleClass(category)} key={category}>{category}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
        {renderCategories}
    </div>
  );
}

export default CategoryFilter;
