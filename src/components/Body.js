import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import reslist from "../utils/mockData";

const Body = () => {
  // Local state variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(reslist);

  // const arr = useState(resList);

  // // const [listOfRestaurants, setListOfRestraunt] = arr;

  // const listOfRestaurants = arr[0];
  // const setListOfRestraunt = arr[1];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
