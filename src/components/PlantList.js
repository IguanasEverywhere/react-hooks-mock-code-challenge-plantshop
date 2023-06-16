import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsToDisplay, updatePrice }) {

  const plantCards = plantsToDisplay.map((plant) => <PlantCard
    key={plant.id}
    id={plant.id}
    name={plant.name}
    image={plant.image}
    price={plant.price}
    updatePrice={updatePrice}
  />)

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
