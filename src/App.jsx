import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setMessage] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setMessage("สวัสดี!");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            setMessage("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            setMessage("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
