import { useDispatch } from "react-redux";
import { MENU_IMAGE } from "../utiils/constant";
import { additems } from "../utiils/cartSlice";

const MenuCard = (props) => {

  const { name, price, description, imageId } = props?.menuData?.card?.info;
  // const{avgRating} = props.menuData.card.info.rating.rating

  const imageURL = MENU_IMAGE + imageId;

  const dispatchAddItems = useDispatch()

  const handleAddItems = (props) => {
    return dispatchAddItems(additems(props))
  }

  return (
    <div>
      <div className=" flex items-center justify-between w-[50%] border-1">
        <div className="w-[80%]  p-1">
          <h2>{name}</h2>
          <h4>{price / 100}</h4>
          <h4>{props.menuData.card.info.ratings.aggregatedRating.rating}</h4>
          <p>{description}</p>
        </div>
        <div className="w-[20%]  p-1">
          <button className="absolute bg-black p-1 rounded-b-sm text-white" onClick={() => handleAddItems(props)}>  Add + </button>
          <img
            className="object-cover w-[100%] rounded-xl"
            src={imageURL}
            alt="food Image"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
