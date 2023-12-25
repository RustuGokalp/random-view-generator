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

  const deleteView = () => {
    setView([]);
  };

  const viewList = view.map((view, index) => {
    return <View key={index} viewName={view} />;
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 my-5 d-flex justify-content-center">
            <button className="btn btn-primary" onClick={showView}>
              Show The View
            </button>
            {view.length > 0 && (
              <button className="btn btn-danger ms-5" onClick={deleteView}>
                Delete View(s)
              </button>
            )}
          </div>
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center">
              {viewList}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
