import React, { useState } from "react";

const Store = () => {
  const [items, setItems] = useState([]); // Renamed for clarity
  const [inputName, setInputName] = useState(""); // For item name
  const [inputPrice, setInputPrice] = useState(""); // For item price
  const [totalPrice, setTotalPrice] = useState(0); // To store total price

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure both fields are filled
    if (inputName.trim() && inputPrice.trim()) {
      setItems([...items, { name: inputName, price: parseFloat(inputPrice) }]);
      setTotalPrice(totalPrice + parseFloat(inputPrice));

      // Clear inputs
      setInputName("");
      setInputPrice("");
    }
  };

  return (
    <div>
      <h1>Store Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Item Price"
          value={inputPrice}
          onChange={(e) => setInputPrice(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - RS{item.price.toFixed(2)}
          </li>
        ))}
      </ul>

      <h2>Total Price: RS{totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default Store;
