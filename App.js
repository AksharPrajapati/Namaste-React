import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./data.js";

// Header
//  - logo / navbar
// Body
//  - search bar / search button
//  - restaurant cards
//    - name, address, rating, cuosins, image, button, time
// Footer
//  - copyright / links / social media / privacy policy

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src="https://img.freepik.com/premium-vector/vector-restaurant-logo-design-template_414584-29.jpg"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="navbar-container">
        <ul className="navbar-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
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

const Body = () => {
  return (
    <div className="restaurant-container">
      <div className="search-container">
        <h1>Search</h1>
        <button>Search</button>
      </div>
      <div className="restaurant-card-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
