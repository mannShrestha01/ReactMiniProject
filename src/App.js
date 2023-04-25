import "./styles.css";
import { useState } from "react";
import Card from "./components/Card";
import list from "./hotelList.json";
const App = () => {
  const [hotelsList, setHotelList] = useState(list);
  const [isWishListOpen, setIsWishListOpen] = useState(false);
  const [isBookListOpen, setIsBookListOpen] = useState(false);

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

  const totalPrice = () => {
    let sum = 0;
    hotelsList.map((item, id) => {
      sum = sum + item.price * item.bookedCount;
    });

    return sum;
  };

  const handleWishlistOpen = () => {
    setIsBookListOpen(false);
    setIsWishListOpen(!isWishListOpen);
  };

  const handleBooklistOpen = () => {
    setIsWishListOpen(false);
    setIsBookListOpen(!isBookListOpen);
  };

  return (
    <div>
      <button onClick={handleWishlistOpen}> WishList</button>
      <button onClick={handleBooklistOpen}> Booked List</button>
      {calculateSum()}
      {isWishListOpen ? (
        <div className="Wishlist">
          {hotelsList.map((item, id) => {
            if (item.isLiked) return <li>{item.name}</li>;
          })}
        </div>
      ) : null}

      {isBookListOpen ? (
        <div className="BookedList">
          {hotelsList.map((item, id) => {
            if (item.bookedCount > 0)
              return (
                <div>
                  <li>
                    {item.name}......
                    {item.price}.....
                    {item.bookedCount}.....
                    {item.price * item.bookedCount}
                  </li>
                </div>
              );
          })}
          total price: {totalPrice()}
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
