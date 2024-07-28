import React, {useEffect, useState} from 'react';
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=485771&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestInfo(json.data)
    }

    console.log(restInfo)
    return (restInfo === null) ?
        <Shimmer />:
        (
        <div className="menu">
            <h1>Restaurant Name</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;