import { useState, useEffect } from 'react'
import { foodDetails } from "./constants/constants"
import FoodItemCard from "./FoodItemsCard"
const BodyComponent = () => {
    const [searchText, setSearchText] = useState("");
    const [foodList, setFoodList] = useState(foodDetails);
    const filterFoodList = () => {
        const filteredFoodItemsList = foodDetails.filter(food => food.restaurentName.includes(searchText));
        setFoodList(filteredFoodItemsList);
    }
    useEffect(() => {
        filterFoodList();
    }, [searchText]);
    return (
        <div>
            <div>
                <input type="text" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }} /
                >
            </div>
            <div className="food-card">{foodList.map((foodItem) => {
                return <FoodItemCard {...foodItem} key={foodItem.id}></FoodItemCard>
            })}</div>
        </div >
    )
}
export default BodyComponent