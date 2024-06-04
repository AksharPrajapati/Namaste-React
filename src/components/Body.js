import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";

const Body = () => {
  const [filteredData, setFilteredData] = useState(restaurants);
  const [input, setInput] = useState("");

  const onSearchClicked = (e) => {
    setInput(e);
    setFilteredData(
      restaurants.filter((item) =>
        item?.info?.name.toLowerCase().includes(e.toLowerCase())
      )
    );
  };

  return (
    <div className="restaurant-container">
      <div className="search-container">
        <input
          type="text"
          value={input}
          onChange={(e) => onSearchClicked(e.target.value)}
        />
      </div>
      <div className="restaurant-card-container">
        {filteredData?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
