import React from "react";
import { IMG_API} from "../utils/constants";

const RestCard = (props) => {
    const { restaurant } = props;

    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        costForTwo
    } = restaurant?.info;
    return (
        <div className="m-2 p-2 w-[250px] h-[500px] bg-purple-300 hover:bg-purple-400 rounded-lg ">
            <div>
                <img className="rounded-lg m-1 w-[225px] h-[225px]" src={IMG_API + cloudinaryImageId} alt="Daphne Food App"/>
            </div>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 className="text-lg">{avgRating}</h4>
            <h4 className="text-lg">{restaurant?.info.sla.deliveryTime} minutes</h4>
            <h4 className="text-lg">{cuisines.join(", ")}</h4>
        </div>
    )
};

export default RestCard;