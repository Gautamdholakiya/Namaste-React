import { useEffect, useState } from "react";


const restaurantDataAPI = async () => {
    let [listOfRestourant, setListOfRestorant] = useState([]);

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2610066&lng=72.85007089999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const jsonData = await data.json()
    //data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    setListOfRestorant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
    //  console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
    console.log(listOfRestourant)

  return listOfRestourant
}


export default restaurantDataAPI