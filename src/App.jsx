import { useState } from "react";
import "./App.css";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const thaiButton = () => {
    setGreetingMessage("สวัสดี!");
  };
  const englishButton = () => {
    setGreetingMessage("Hi!");
  };
  const chineseButton = () => {
    setGreetingMessage("你好!");
  };
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button onClick={thaiButton}>สวัสดี!</button>
        <button onClick={englishButton}>Hi!</button>
        <button onClick={chineseButton}>你好!</button>
      </div>
    </div>
  );
}

export default App;
