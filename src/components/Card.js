import { FaHeart } from "react-icons/fa";
const Card = (props) => {
  const clickOnHeart = () => {
    props.alertMe(props.id);
  };
  return (
    <div className="Card">
      <h1>{props.id}</h1>
      <img src={props.item.image} className="Hotel" />
      <FaHeart
        onClick={clickOnHeart}
        color={props.item.isLiked ? "red" : null}
      />
      <br />
      {props.item.name}
      {props.item.address}
      {props.item.description}
    </div>
  );
};

export default Card;
