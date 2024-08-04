import ItemList from "./ItemList";

const ResCategory = (props) => {
    const card = props;
    let { showIndex, setShowIndex } = props;
    return(
        <>
            <div className="w-1/2 mx-auto my-4 bg-purple-100 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={() => {
                    setShowIndex(!showIndex);
                }}>
                    <span className="font-bold">{card?.categories?.info?.category}</span>
                    <span>{showIndex ? "⬆" :"⬇"}</span>
                </div>
                {showIndex && <ItemList items={card?.categories?.info}/>
                }
            </div>
        </>
    )
}

export default ResCategory;