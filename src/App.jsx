import "./App.css";
import { useState } from "react";
import View from "./View";

function getRandomView() {
  const viewArray = ["City", "Mountain", "Sea", "Summer"];
  return viewArray[Math.floor(Math.random() * viewArray.length)];
}

function App() {
  const [view, setView] = useState([]);
  const showView = () => {
    setView([...view, getRandomView()]);
  };
  const viewList = view.map((view, index) => {
    return <View key={index} viewName={view} />;
  });

  return (
    <>
      <button onClick={showView}>Show The View</button>
      <div>{viewList}</div>
    </>
  );
}

export default App;
