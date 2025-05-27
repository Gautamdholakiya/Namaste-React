import { CDN_URL } from "../utiils/constant";

const RestroComponent = (props) => {
    const {cloudinaryImageId, name,avgRating,cousing,deliveryTime} = props.resData.info

    const imageId = CDN_URL+cloudinaryImageId
        
    return (
      <div className="restaurant-card">
        <div className="restaurant-img">
          <img
            src={imageId}
            alt="Food Image"
          />
        </div>
        <div className="restaurant-details">
          <h2 className="restaurant-name">{name}</h2>
          <div className="restaurant-rating">
            <span className="rating">{avgRating}</span>
            <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <p className="restaurant-description">{cousing}</p>
          <p className="delivery-time">
            {"Delivered in " +  props?.resData?.info?.sla?.deliveryTime+ " minutes"}
          </p>
        </div>
      </div>
    );
  };


export default RestroComponent