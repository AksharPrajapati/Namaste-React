import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_LOGO_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useResturantPage from "../utils/useResturantPage";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

function RestaurantPage() {
  const { id } = useParams();
  const foodData = useResturantPage(id);

  const dispatch = useDispatch()

  const handleAddToCart = (item) => {
    dispatch(addToCart(foodData))
  }

  // if (!id) {
  //   return <Error />;
  // }

  return Object.keys(foodData).length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-10 flex justify-center gap-5">
      <img
        width={300}
        src={RESTAURANT_LOGO_URL + foodData?.cloudinaryImageId}
        alt="food"
        className="rounded-lg"
      />

      <div>
        <h1 className="text-3xl font-bold">{foodData?.name}</h1>
        <h1>
          ⭐️ {foodData?.avgRatingString} ({foodData?.totalRatingsString})
        </h1>
        <p>{foodData?.costForTwoMessage}</p>
        <p>{foodData?.cuisines?.join(", ")}</p>
        <h1 className="text font-bold">📍 {foodData?.areaName}</h1>
        <h1>⏳ {foodData?.sla?.slaString}</h1>
        <button className="bg-orange-500 p-1 text-white rounded-lg w-32 mt-2" onClick={handleAddToCart}>Add +</button>
      </div>
    </div>
  );
}

export default RestaurantPage;
