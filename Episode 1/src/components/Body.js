import React, {useState, useEffect} from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    console.log(filteredRestaurants)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        console.log(data)
        const json = await data.json();
        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return restaurants.length === 0 ? (
        <Shimmer />
        ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search for restaurants"
                        value={searchText}
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                        }}
                    />
                    <button onClick={() => {
                        const filteredRestaurant = restaurants.filter((restaurant) =>
                            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurant);
                    }} className="search-btn">Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = restaurants.filter((restaurant) => restaurant.info.avgRating > 4)
                    setFilteredRestaurants(filteredList);
                }}>top rated restaurants</button>
            </div>
            <div className="rest-container">
                {filteredRestaurants.map((restaurant) => (
                    <RestCard key={restaurant.info.id} restaurant={restaurant}/>
                ))}
            </div>
        </div>
    )
};

export default Body;