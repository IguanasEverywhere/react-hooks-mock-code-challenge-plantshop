import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsToDisplay, updatePrice, deletePlant }) {

  const plantCards = plantsToDisplay.map((plant) => <PlantCard
    key={plant.id}
    id={plant.id}
    name={plant.name}
    image={plant.image}
    price={plant.price}
    updatePrice={updatePrice}
    deletePlant={deletePlant}
  />)

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
