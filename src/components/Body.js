import { useEffect, useState } from "react";
import { RestaurantCard, WithVegRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    getFoodOrderData();
  }, []);

  const getFoodOrderData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.18880&lng=72.82930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );

      const jsonData = await data.json();

      setRestaurantData(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      setFilteredData(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    } catch (e) {
      console.error(e);
    }
  };

  const onSearchClicked = (e) => {
    setInput(e);
    setFilteredData(
      restaurantData.filter((item) =>
        item?.info?.name.toLowerCase().includes(e.toLowerCase()),
      ),
    );
  };

  return (
    <div className="mt-10 flex flex-col justify-center px-24" style={{}}>
      {/* <div className=""> */}
      <input
        type="text"
        data-testid="search-box"
        value={input}
        className="mx-auto mb-10 h-8 w-96 rounded-md border-2 border-solid border-orange-400 px-1"
        onChange={(e) => onSearchClicked(e.target.value)}
        placeholder="Search"
      />
      {/* </div> */}
      {filteredData?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {filteredData?.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              {restaurant?.info?.veg ? <WithVegRestaurantCard restaurant={restaurant} /> : <RestaurantCard restaurant={restaurant} />}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
