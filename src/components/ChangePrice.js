import React, { useState } from 'react';

function ChangePrice({ updatePrice, id }) {

  const [priceNum, setPriceNum] = useState(0);


  function handlePriceChange(e) {
    setPriceNum(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    updatePrice(priceNum, id);

  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handlePriceChange} type='number' step='0.01' value={priceNum}></input>
      <input type='submit'></input>
    </form>
  )
}

export default ChangePrice;