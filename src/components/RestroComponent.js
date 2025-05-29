import { CDN_URL } from "../utiils/constant";

const RestroComponent = (props) => {
  const { cloudinaryImageId, name, avgRating, cousing, deliveryTime } = props.resData.info

  const imageId = CDN_URL + cloudinaryImageId

  return (
    <div className="w-[30%] p-1 cursor-pointer" >
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