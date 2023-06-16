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
        'Content-Type' : 'application/json',
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


  return (
    <main>
      <NewPlantForm onNewPlantSubmit={onNewPlantSubmit}/>
      <Search searchForPlants={searchForPlants}/>
      <PlantList plantsToDisplay={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
