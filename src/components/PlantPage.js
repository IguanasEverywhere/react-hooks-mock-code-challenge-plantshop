import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [allPlants, setAllPlants] = useState([]);
  const [plantsToDisplay, setPlantsToDisplay] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(plants => {
        setAllPlants(plants);
        setPlantsToDisplay(plants)
      })
  }, [])

  function onNewPlantSubmit(formData) {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(newPlant => {
        setAllPlants([...allPlants, newPlant]);
        setPlantsToDisplay([...plantsToDisplay, newPlant]);
      })
  }

  function searchForPlants(searchValue) {
    const filteredPlants = allPlants.filter((plant) => plant.name.toLowerCase().includes(searchValue.toLowerCase()))
    setPlantsToDisplay(filteredPlants)
  }

  function updatePrice(updatedPrice , id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        price: updatedPrice
      })
    })
    .then(r => r.json())
    .then(updatedObj => {
      const updatedPlants = allPlants.map((plant) => {
        if (plant.id === updatedObj.id) {
          return updatedObj
        } else {
          return plant;
        }
      })
      setAllPlants(updatedPlants)
      setPlantsToDisplay(updatedPlants)
    })
  }

  function deletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(deletedPlant => {
      const filteredPlants = allPlants.filter((plant) => plant.id !== id);
      setAllPlants(filteredPlants);
      setPlantsToDisplay(filteredPlants);
    })
  }


  return (
    <main>
      <NewPlantForm onNewPlantSubmit={onNewPlantSubmit} />
      <Search searchForPlants={searchForPlants} />
      <PlantList plantsToDisplay={plantsToDisplay} updatePrice={updatePrice} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
