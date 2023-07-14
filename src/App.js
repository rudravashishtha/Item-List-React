import React from "react";
import ItemList from './components/ItemList';

const items = [
  {
    image: "https://static.massimodutti.net/3/photos//2023/I/0/1/p/6866/772/250/6866772250_1_1_16.jpg",
    description: "T-Shirt"
  },
  {
    image: "https://www.glassons.com/content/products/r-hyper-mid-rise-wide-leg-jean-suzy-mid-wash-full-jd96872rdnm.jpg",
    description: "Jeans"
  },
  {
    image: "broken-link.jpg",
    description: "Shoes"
  }
];

const App = () => {
  return (
    <div>
      <h1>List of Items</h1>
      <ItemList items={items} />
    </div>
  );
};

export default App;

