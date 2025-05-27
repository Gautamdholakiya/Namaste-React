import RestroComponent from "./RestroComponent";
import { useEffect, useState } from "react";

const BodyConponent = () => {
  let [listOfRestourant, setListOfRestorant] = useState([]);
  let [serchtext, setSerchText] = useState("")


  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2610066&lng=72.85007089999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const jsonData = await data.json()
    return  setListOfRestorant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  useEffect(() => {
    fetchData()
  },[])

  return listOfRestourant?.data?.length === 0 ? <h1>Loading...</h1> : (
    <div className="body">
      <div>
        <button
          onClick={ () => 
          { 
            let filterData = listOfRestourant.filter((res) => {
              return(res.info.avgRating > 4.2)
            })
            setListOfRestorant(filterData)
          }
        }
        >
          top restorant
        </button>
        <input type="text" placeholder="Search restaurants..." value={serchtext} onChange={(e) => {
          setSerchText(e.target.value)
        }}/>
        <button onClick={() => {
          console.log(serchtext)
          let serchData = listOfRestourant.filter( (data) => {
            return data.info.name.toLowerCase().includes(serchtext.toLowerCase()) }
          )
            return setListOfRestorant(serchData)
        }}>Enter</button>
      </div>
      <div className="restrocard">
        {listOfRestourant.map((restorentalldata) => {
          return (
            <RestroComponent
              key={restorentalldata.info.id}
              resData={restorentalldata}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BodyConponent;
