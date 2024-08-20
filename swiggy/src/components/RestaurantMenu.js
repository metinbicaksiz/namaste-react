import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import ResCategory from "./ResCategory";
// import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
    const { resId} = useParams();
    const restInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState();

    if (restInfo === null) {
        return <Shimmer/>
    };

    const {
        name,
        cuisines,
        costForTwoMessage
    } = restInfo?.cards[2]?.card?.card?.info;

    const {itemCards}  =  restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[16]?.card?.card;
    const categories = itemCards.filter(c => c?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Dish");
    return (
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) =>
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {item?.card?.info?.price / 100}
                    </li>
                )}
            </ul>
                {
                    categories.map((c, index) =>
                        <ResCategory
                            key={c?.card?.info?.id}
                            categories={c?.card}
                            showIndex={index === showIndex && true}
                            setShowIndex={() => setShowIndex(index)}
                        /> )
                }
        </div>
    );
};

export default RestaurantMenu;