import "./styles.css";
import { FaTrash } from "react-icons/fa";

import { useState } from "react";
import Card from "./components/Card";
import list from "./hotelList.json";
const App = () => {
  const [hotelsList, setHotelList] = useState(list);
  const [isWishListOpen, setIsWishListOpen] = useState(false);
  const [isBookListOpen, setIsBookListOpen] = useState(false);
  //1. not doable isBookListOpen = 'ram'
  //2. always setIsBookListOpen('ram')
  const handleFavorite = (id) => {
    const backUpHotelList = [...hotelsList];
    backUpHotelList[id].isLiked = !backUpHotelList[id].isLiked;
    setHotelList(backUpHotelList);
  };

  const handleBooking = (id, action) => {
    const backUpHotelList = [...hotelsList];
    if (action === "dec") {
      backUpHotelList[id].bookedCount--;
    } else {
      backUpHotelList[id].bookedCount++;
    }
    setHotelList(backUpHotelList);
  };

  const removeParticularBookings = (id) => {
    const backUpHotelList = [...hotelsList];
    backUpHotelList[id].bookedCount = 0;
    setHotelList(backUpHotelList);
  };

  const removeAllBooking = () => {
    const backUpHotelList = [...hotelsList];
    backUpHotelList.map((item, id) => {
      item.bookedCount = 0;
      return item;
    });
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
        <table border={1} className="BookedList">
          {hotelsList.map((item, id) => {
            if (item.bookedCount > 0)
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => handleBooking(id, "inc")}>+</button>
                  </td>
                  <td>{item.bookedCount}</td>
                  <td>
                    <button onClick={() => handleBooking(id, "dec")}>-</button>
                  </td>
                  <td>{item.price * item.bookedCount}</td>
                  <td>
                    <FaTrash onClick={() => removeParticularBookings(id)} />
                  </td>
                </tr>
              );
          })}
          {totalPrice() > 0 ? (
            <div>total price: {totalPrice()}</div>
          ) : (
            "NO BOOKED LISTS"
          )}
          <button onClick={removeAllBooking}>Remove all Bookings</button>
        </table>
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
