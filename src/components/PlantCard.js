import React, { useState } from "react";
import ChangePrice from './ChangePrice';

function PlantCard({ name, image, price, updatePrice, id, deletePlant }) {

  const [isStocked, setIsStocked] = useState(true);

  function handleStockedClick() {
    setIsStocked(!isStocked);
  }

  function handleDeleteClick() {
    deletePlant(id);
  }
  return (
    <li className="card">
      <button onClick={handleDeleteClick}>X</button>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <ChangePrice
        updatePrice={updatePrice}
        id={id}
        name={name}
        image={image}
      />
      {isStocked ? (
        <button onClick={handleStockedClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockedClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
