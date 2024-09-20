import React, {useContext} from "react";
import { IMG_API} from "../utils/constants";
import userContext from "../utils/UserContext";
import UserContext from "../utils/UserContext";

const RestCard = (props) => {
    const { restaurant } = props;
    const data = useContext(UserContext);

    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        costForTwo
    } = restaurant?.info;
    return (
        <div data-testid="restCard" className="m-2 p-2 w-[250px] h-[500px] bg-purple-300 hover:bg-purple-400 rounded-lg ">
            <div>
                <img className="rounded-lg m-1 w-[225px] h-[225px]" src={IMG_API + cloudinaryImageId} alt="Daphne Food App"/>
            </div>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 className="text-lg">{avgRating}</h4>
            <h4 className="text-lg">{restaurant?.info.sla.deliveryTime} minutes</h4>
            <h4 className="text-lg">{cuisines.join(", ")}</h4>
            <h4>{data.loggedInUSer}</h4>
        </div>
    )
};

export default RestCard;