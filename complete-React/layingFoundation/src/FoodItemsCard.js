const FoodItemCard = ({ restaurentName, imgUrl, cusine, Rating }) => {
    return (
        <div className="card">
            <img src={imgUrl}></img>
            <h1>{restaurentName}</h1>
            <h2>{cusine.join(",")}</h2>
            <h3>{Rating}</h3>
        </div>

    )
}
export default FoodItemCard