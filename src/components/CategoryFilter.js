import React from "react";

function CategoryFilter({ setCatFilter }) {  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button onClick={() => setCatFilter('All')}>All</button>
      <button onClick={() => setCatFilter('Code')}>Code</button>
      <button onClick={() => setCatFilter('Food')}>Food</button>
      <button onClick={() => setCatFilter('Money')}>Money</button>
      <button onClick={() => setCatFilter('Misc')}>Misc</button>
    </div>
  );
}

export default CategoryFilter;

