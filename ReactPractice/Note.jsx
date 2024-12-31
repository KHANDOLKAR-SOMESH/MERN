import React, { useState } from 'react';

function Note() {
  const [todo, settodo] = useState([]);
  const [inputValue, setinputValue] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      settodo([...todo, inputValue]);
      setinputValue("");
    }
  };

  const changehandler = (e) => {
    setinputValue(e.target.value);
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" value={inputValue} onChange={changehandler} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Note;
