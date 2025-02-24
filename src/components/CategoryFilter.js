import { React, useState} from "react";

function CategoryFilter({ setCatFilter }) {  
  const [selectedCategory, setSelectedCategory] = useState("All")
  function handleClick(category){
    setSelectedCategory(category);
    setCatFilter(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button onClick={() => handleClick('All')}
        className={selectedCategory === 'All' ? 'selected' : ''}
        >All
      </button>
      <button onClick={() => handleClick('Code')}
        className={selectedCategory === 'Code' ? 'selected' : ''}
        >Code
      </button>
      <button onClick={() => handleClick('Food')}
        className={selectedCategory === 'Food' ? 'selected' : ''}
        >Food
      </button>
      <button onClick={() => handleClick('Money')}
        className={selectedCategory === 'Money' ? 'selected' : ''}
        >Money
      </button>
      <button onClick={() => handleClick('Misc')}
        className={selectedCategory === 'Misc' ? 'selected' : ''}
        >Misc
      </button>
    </div>
  );
}

export default CategoryFilter;

