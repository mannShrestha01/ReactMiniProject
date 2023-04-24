import "./styles.css";
import { useState } from "react";
import Card from "./components/Card";
import list from "./hotelList.json";
const App = () => {
  const [hotelsList, setHotelList] = useState(list);
  const [isWishListOpen, setIsWishListOpen] = useState(false);
  const handleFavorite = (id) => {
    const backUpHotelList = [...hotelsList];
    backUpHotelList[id].isLiked = !backUpHotelList[id].isLiked;
    setHotelList(backUpHotelList);
  };

  const handleBooking = (id) => {
    const backUpHotelList = [...hotelsList];
    backUpHotelList[id].bookedCount++;
    setHotelList(backUpHotelList);
  };

  const calculateSum = () => {
    let sum = 0;
    hotelsList.map((item, id) => {
      if (item.isLiked) {
        sum++;
      }
    });

    return sum;
  };

  const handleWishlistOpen = () => {
    setIsWishListOpen(!isWishListOpen);
  };

  return (
    <div>
      <button onClick={handleWishlistOpen}> WishList</button>
      {calculateSum()}
      {isWishListOpen ? (
        <div className="Wishlist">
          {hotelsList.map((item, id) => {
            if (item.isLiked) return <li>{item.name}</li>;
          })}
        </div>
      ) : null}
      {hotelsList.map((item, id) => {
        return (
          <Card
            item={item}
            handleBooking={handleBooking}
            handleFavorite={handleFavorite}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default App;
