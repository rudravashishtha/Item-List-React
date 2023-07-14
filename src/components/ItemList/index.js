import React from "react";
import './index.css'

const ListItem = ({ imageSrc, description }) => {
  return (
    <div className="list-item">
      <img src={imageSrc} alt={description} onError={(e) => {e.target.src = '/item-image.png'}} />
      <p>{description}</p>
    </div>
  );
};

const List = ({ items }) => {
  return (
    <div className="card-item">
      {items.map((item, index) => (
        <ListItem
          key={index}
          imageSrc={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default List;
