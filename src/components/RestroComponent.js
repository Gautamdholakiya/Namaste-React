import { RESTAURANT_LIST_IMAGE_URL } from "../utiils/constant";

const RestroComponent = (props) => {
  const { cloudinaryImageId, name, avgRating, cousing, deliveryTime } = props.resData.info

  const imageId = RESTAURANT_LIST_IMAGE_URL + cloudinaryImageId

  return (
    <div className="border-s-0  my-0.5 w-60 h-80 p-1 cursor-pointer" >
      <img className="object-cover h-[200px] w-[100%] rounded-xl" src={imageId} alt="Food Image" />
      <div>
        <h2>{name}</h2>
        <div>
          <span>{avgRating}</span>
          <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
        </div>
        <p>{cousing}</p>
        <p>
          {"Delivered in " + props?.resData?.info?.sla?.deliveryTime + " minutes"}
        </p>
      </div>
    </div>
  );
};


export default RestroComponent