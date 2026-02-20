import React from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(39);
  // count = count + 1; // DO NOT DO THIS

  const [inputValue, setInputValue] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if(count > 0){
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter App</h1>
      <p style={{ fontSize: "20px" }}>Count is {count}</p>
      <div>
        <button style={{ margin: "0px 10px" }} onClick={increaseCount}>
          Increase
        </button>
        <button style={{ margin: "0px 10px" }} onClick={decreaseCount}>
          Decrease
        </button>
        <button style={{ margin: "0px 10px" }} onClick={resetCount}>
          Reset
        </button>
      </div>
      <div>
        <input
          style={{ height: "25px" }}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button style={{ margin: "10px 10px" }} onClick={() => setCount(inputValue)}>
          Set to {inputValue}
        </button>
      </div>
    </>
  );
}

export default App;


// NOTE: if you pass onClick={increaseCount}, it will work as expected. But if you pass onClick={increaseCount()}, it will call the function immediately when the component renders, which is not what we want. We want to pass the function reference, not call it immediately.

// NOTE: if you want to pass arguments to the function, you can use an arrow function like onClick={() => increaseCount(5)}. This way, the function will be called with the argument when the button is clicked, not immediately when the component renders.

// Always call the function as onClick={() => increaseCount()} instead of onClick={increaseCount()} to avoid calling the function immediately when the component renders.

// const incrementHandler = (numVal) => {
//   setCount(numVal + 1); // short hand notation
//   setCount((prevCount) => prevCount + 1); // long hand notation
// }

// Both notations will work, but the long hand notation is recommended when you are updating the state based on the previous state, as it ensures that you are working with the most up-to-date state value. The short hand notation may lead to unexpected results if there are multiple state updates happening in quick succession, as it may not have the latest state value when it is called.

// When fetching value from an input field, it is important to convert the value to a number using Number(e.target.value) or parseInt(e.target.value) before updating the state, as the value from the input field is always a string. If you do not convert it to a number, you may encounter issues when trying to perform arithmetic operations on the state value, as it will be treated as a string instead of a number.