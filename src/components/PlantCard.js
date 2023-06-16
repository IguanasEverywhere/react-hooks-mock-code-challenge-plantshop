import React, { useState } from "react";

function PlantCard({ name, image, price }) {

  const [isStocked, setIsStocked] = useState(true);

  function handleStockedClick() {
    setIsStocked(!isStocked);
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isStocked ? (
        <button onClick={handleStockedClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockedClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
