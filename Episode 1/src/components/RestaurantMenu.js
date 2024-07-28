import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from "./Shimmer";
import { MENU_API} from "../utils/constants";

const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);
    const { resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch( MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestInfo(json.data)
    }

    if (restInfo === null) {
        return <Shimmer/>
    };

    const {
        name,
        cuisines,
        costForTwoMessage
    } = restInfo?.cards[2]?.card?.card?.info;

    const { itemCards } =  restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[18]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) =>
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {item?.card?.info?.price/100}</li>
                )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;