import RestroComponent from "./RestroComponent";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const BodyConponent = () => {
  let [listOfRestourant, setListOfRestorant] = useState([]);
  let [serchtext, setSerchText] = useState("")


  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const jsonData = await data.json()
    return setListOfRestorant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return listOfRestourant?.data?.length === 0 ? <h1>Loading...</h1> : (
    <div className="body p-2">
      <div className="flex justify-between items-center p-2">
        <div>
          <button className="border-2 bg-black text-white p-2 rounded-xl cursor-pointer"
            onClick={() => {
              let filterData = listOfRestourant.filter((res) => {
                return (res.info.avgRating > 4.5)
              })
              setListOfRestorant(filterData)
            }
            }
          >
            Top restorant
          </button>
        </div>
        <div>
          <input className="border-1 bg-black text-white p-1 rounded-xl cursor-pointer" type="text" placeholder="Search restaurants..." value={serchtext} onChange={(e) => {
            setSerchText(e.target.value)
          }} />
          <button className="border-2 bg-black text-white p-1.5 rounded-xl cursor-pointer" onClick={() => {
            let serchData = listOfRestourant.filter((data) => {
              return data.info.name.toLowerCase().includes(serchtext.toLowerCase())
            }
            )
            return setListOfRestorant(serchData)
          }}>Enter</button>
        </div>
      </div>
      <div className="restrocard flex flex-wrap justify-center items-center">
        {listOfRestourant.map((restorentalldata) => {
          return (
            <Link key={restorentalldata.info.id} to={"/restaurant/" + restorentalldata.info.id}>
              <RestroComponent resData={restorentalldata} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BodyConponent;
