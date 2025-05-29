import { useEffect, useState } from "react"
import { RESTAURANT_MENU_URL } from "../utiils/constant"
import MenuCard from "./MenuCard"

const RestaurantMenu = () => {

    const [restaurantMenu, SetRestaurantMenu] = useState([])

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async() => {
        const data = await fetch(RESTAURANT_MENU_URL)

        const jsonData = await data.json()

        SetRestaurantMenu(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards)
        // console.log(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards)
    }

    return(
        <div>
            <div>
                <h1 className="p-3 text-3xl text-black font-bold border-2"> Restaurant Name</h1>
                <h1 className="text-2xl p-3 text-amber-950 font-bold "> Recommand Item</h1>
            </div>

            {restaurantMenu.map((data) => {
                console.log(data)
                return <MenuCard key= {data.card.info.id} menuData = {data}></MenuCard>
            })}
            {/* <MenuCard></MenuCard> */}
        </div>
    )
}

export default RestaurantMenu