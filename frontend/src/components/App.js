import React, { useState } from "react";
import Heading from "./heading";
import List from "./list";

function App() {
  const [cnt, setCount] = useState(0);
  const [text, setText] = useState("Your Name is Required");
  const [name, setName] = useState("");

  function decrease() {
    setCount(cnt - 1);
  }
  function increase() {
    setCount(cnt + 1);
  }
  function submit() {
    setText(`Your Name Saved: ${name}`);
  }
  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1>{text}</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={handleChange}
      />
      <button onClick={submit}>Save</button>
      <h1>{cnt}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <Heading />
      <List />
    </div>
  );
}

export default App;
