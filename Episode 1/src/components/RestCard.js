import React from "react";

const RestCard = (props) => {
    const { restaurant } = props;

    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        costForTwo
    } = restaurant?.info;
    const imgUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    return (
        <div className="restCard">
            <div className="rest-img">
                <img src={imgUrl + cloudinaryImageId} alt="Daphne's Cafe"/>
            </div>
            <h3>{name}</h3>
            <div className="rest-info">
                <span>{avgRating}</span> <span>{restaurant?.info.sla.deliveryTime} minutes</span>
                <p>{cuisines.join(", ")}</p>
            </div>
        </div>
    )
};

export default RestCard;