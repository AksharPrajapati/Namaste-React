import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_LOGO_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

function RestaurantPage() {
  const { id } = useParams();
  const [foodData, setFoodData] = useState({});

  if (!id) {
    return <Error />;
  }

  useEffect(() => {
    getFoodOrderData();
  }, [id]);

  const getFoodOrderData = async () => {
    try {
      const foodData = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.18880&lng=72.82930&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );

      const json = await foodData.json();
      setFoodData(json?.data?.cards[2]?.card?.card?.info);
    } catch (e) {
      console.error(e);
    }
  };

  return Object.keys(foodData).length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <img
        width={300}
        src={RESTAURANT_LOGO_URL + foodData?.cloudinaryImageId}
        alt="food"
      />
      <h1>{foodData?.name}</h1>
      <h1>
        {foodData?.avgRatingString} ({foodData?.totalRatingsString})
      </h1>
      <p>{foodData?.costForTwoMessage}</p>
      <p>{foodData?.cuisines?.join(", ")}</p>
      <h1>{foodData?.areaName}</h1>
      <h1>{foodData?.sla?.slaString}</h1>
    </div>
  );
}

export default RestaurantPage;
