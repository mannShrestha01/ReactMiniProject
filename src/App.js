import "./styles.css";
import { useState } from "react";
import Card from "./components/Card";
import list from "./hotelList.json";
const App = () => {
  const [hotelsList, setHotelList] = useState(list);
  const alertMe = (id) => {
    alert(`hi this ${id} is clicked`);
  };

  return (
    <div>
      {hotelsList.map((item, id) => {
        return <Card item={item} alertMe={alertMe} id={id} />;
      })}
    </div>
  );
};

export default App;
