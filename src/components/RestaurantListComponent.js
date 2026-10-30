import restaurantData from "../utils/mockData";
import RestaurantCardComponent from "./RestaurantCardComponent";
import { useEffect, useState } from "react";
import ShimmerComponent from './ShimmerComponent'

const RestaurantListComponent = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        fetchRestorantData();
    }, []);

    const fetchRestorantData = async () => {
       let jsonData =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9063433&lng=77.5856825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const resData = await jsonData.json() 
        console.log(resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
        setRestaurantList(resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurantList(resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


    };
    // create Shimmer UI
    // if(restaurantList.length === 0) {
    //     return <h1>Loading...</h1>
    // }
    return restaurantList.length === 0 ? <ShimmerComponent/> : (
        <div className="restaurant-page">
            <div>
                <input type="text" value={filterText} onChange={(e) => { setFilterText(e.target.value) }}>
                </input>
                <button onClick={() => {
                    const filteredList = restaurantList.filter((restaurant) => (
                        restaurant.info.name.toLowerCase().includes(filterText.toLowerCase())
                    ));
                    setFilteredRestaurantList(filteredList);
                
                }
                }>
                    Search
                </button>
                <button className="btn-filter-rating" onClick={() => setFilteredRestaurantList(
                    restaurantList.filter((restaurant) => restaurant.rating > 4.5)
                )}>
                    Filter High Rated Pickles
                </button>
            </div>
            {/* <div className="restaurant-heading">
                <h3>Our Collections</h3>
                <h1>Taste the Tradition</h1>
            </div> */}
            <div className="restaurant-grid">
                {filteredRestaurantList.map((restaurant) => (
                    <RestaurantCardComponent key={restaurant.info.id} restaurant={restaurant.info} />
                ))}
            </div>

        </div>
    )
}

export default RestaurantListComponent;