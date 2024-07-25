import { RESTAURANT_LOGO_URL } from "../utils/constants";

export const RestaurantCard = ({ restaurant }) => {
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
    <div data-testid="resCard" className="m-2 w-56 p-4 hover:w-60">
      <img
        src={RESTAURANT_LOGO_URL + cloudinaryImageId}
        alt="logo"
        className="mb-2 w-full rounded-lg"
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

const withVegRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <h1 className="absolute bg-green-500 text-white p-1 rounded-lg ml-2">Veg Available</h1>
        <RestaurantCard {...props} />
      </div>
    );
  }
}

export const WithVegRestaurantCard = withVegRestaurantCard(RestaurantCard);
