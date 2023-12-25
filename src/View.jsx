import "./View.css";
import cityView from "./images/city-view.webp";
import mountainView from "./images/mountain-view.png";
import seaView from "./images/sea-view.png";
import summerView from "./images/summer-view.webp";

function View({ viewName }) {
  return (
    <div>
      <img src={cityView} alt="City View" />
    </div>
  );
}

export default View;
