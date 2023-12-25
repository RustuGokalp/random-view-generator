import "./View.css";
import cityView from "./images/city-view.webp";
import mountainView from "./images/mountain-view.png";
import seaView from "./images/sea-view.png";
import summerView from "./images/summer-view.webp";

const viewMap = {
  City: cityView,
  Mountain: mountainView,
  Sea: seaView,
  Summer: summerView,
};

function View({ viewName }) {
  return (
    <div>
      <img src={viewMap[viewName]} alt="City View" className="mb-2 me-3" />
    </div>
  );
}

export default View;
