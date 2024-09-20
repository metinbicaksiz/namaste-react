import React from 'react';
import {useDispatch} from "react-redux";
import { addItem} from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();
    const handleAddItem = () => {
        dispatch(addItem(items.name));
    }
    return(
       <div
           data-testid="itemList"
           className="border-b-gray-300 border-2 text-left p-2 m-2">
          <div className="py-2">
              <span className="font-semibold">{items?.name} - </span>
              <span>{items?.price / 100}</span>
          </div>
           <p className="text-xs">{items?.description}</p>
           <button onClick={handleAddItem}>Add</button>
       </div>
    )
}

export default ItemList;