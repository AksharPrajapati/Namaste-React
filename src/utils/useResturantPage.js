import { useEffect, useState } from "react";

const useResturantPage = (id) => {
  const [foodData, setFoodData] = useState({});

  useEffect(() => {
    getFoodOrderData();
  }, [id]);

  const getFoodOrderData = async () => {
    try {
      const foodData = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.18880&lng=72.82930&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`,
      );

      const json = await foodData.json();
      setFoodData(json?.data?.cards[2]?.card?.card?.info);
    } catch (e) {
      console.error(e);
    }
  };

  return foodData;
};

export default useResturantPage;
