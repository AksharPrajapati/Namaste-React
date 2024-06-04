import { RESTAURANT_LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRatingString,
    sla,
    costForTwo,
    cuisines,
  } = restaurant?.info;
  return (
    <div className="restaurant-card">
      <img
        src={RESTAURANT_LOGO_URL + cloudinaryImageId}
        alt="logo"
        className="restaurant-logo"
      />
      <h3>{name}</h3>
      <p>
        {avgRatingString} . {sla.slaString}
      </p>
      <p>{costForTwo}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestaurantCard;
