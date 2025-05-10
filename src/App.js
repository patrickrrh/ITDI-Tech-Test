import "./styles.css";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);

  function handleInput(e) {
    const formatted = e.target.value.replace(/\D/g, ""); // remove non-digit characters using regex
    setInputValue(formatted);
  }

  function handleSubmit() {
    if (!inputValue) {
      setResult(0);
      return result;
    }

    const inputNum = parseInt(inputValue, 10);
    const reversedNum = parseInt(inputValue.split("").reverse().join(""), 10);
    const difference = Math.abs(inputNum - reversedNum);
    setResult(difference);
  }

  return (
    <div className="App">
      <div>
        Number: <input value={inputValue} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
