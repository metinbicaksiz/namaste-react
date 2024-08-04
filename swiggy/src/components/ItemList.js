const ItemList = ({ items }) => {
    return(
       <div className="border border-b-gray-300 border-2 text-left p-2 m-2">
          <div className="py-2">
              <span className="font-semibold">{items?.name} - </span>
              <span>{items?.price / 100}</span>
          </div>
           <p className="text-xs">{items?.description}</p>
       </div>
    )
}

export default ItemList;