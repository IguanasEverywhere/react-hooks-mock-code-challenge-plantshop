import React, { useState } from "react";

function NewPlantForm({ onNewPlantSubmit }) {

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: ''
  })

  function handleFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    onNewPlantSubmit(formData);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleFormChange} type="text" name="name" placeholder="Plant name" value={formData.name} />
        <input onChange={handleFormChange} type="text" name="image" placeholder="Image URL" value={formData.image} />
        <input onChange={handleFormChange} type="number" name="price" step="0.01" placeholder="Price" value={formData.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
