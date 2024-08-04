import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { SWIGGY_API} from "../utils/constants";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>Looks like you are offline! Please check your connection!!!</h1>
    }

    return restaurants.length === 0 ? (
        <Shimmer />
        ) : (
        <div className="body">
            <div className="filter flex items-center ml-24">
                <div className="mx-1 p-2">
                    <input
                        className="border border-solid border-black rounded-sm w-auto"
                        type="text"
                        name="searchInput"
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
                    }} className="px-4 py-1 bg-green-100 m-4 rounded-lg">
                        Search
                    </button>
                </div>
                <div className="m-4 p-4">
                    <button className="px-4 py-1 bg-gray-100 rounded-lg" onClick={() => {
                        const filteredList = restaurants.filter((restaurant) => restaurant.info.avgRating > 4)
                        setFilteredRestaurants(filteredList);
                    }}>
                        top rated restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center flex-row">
                {filteredRestaurants.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}>
                        <RestCard restaurant={restaurant}/>
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default Body;