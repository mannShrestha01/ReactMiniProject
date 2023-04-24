import { FaHeart } from "react-icons/fa";
const Card = (props) => {
  const handleWishList = () => {
    props.handleFavorite(props.id);
  };
  const handleReservation = () => {
    props.handleBooking(props.id);
  };
  return (
    <div className="Card">
      <h1>{props.id}</h1>
      <img src={props.item.image} className="Hotel" />
      <FaHeart
        onClick={handleWishList}
        color={props.item.isLiked ? "red" : null}
      />
      <button onClick={handleReservation}> Book </button>
      <br />
      {props.item.name}
      {props.item.bookedCount}
      {props.item.address}
      {props.item.description}
    </div>
  );
};

export default Card;
