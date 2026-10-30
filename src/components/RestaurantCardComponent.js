import {CLOUDNARY_IMAGE} from '../utils/constants'
const RestaurantCardComponent = ({ restaurant }) => {
    // console.log(restaurant)
    const { name, cloudinaryImageId, avgRatingString, cuisines, costForTwo, description } = restaurant;
     return( <div className="restaurant-card-wrapper"> 
        <div className="restaurant-card">
            <img className="restaurant-image" src={CLOUDNARY_IMAGE + cloudinaryImageId} alt="Pickle" />
            <h3 className="restaurant-name">{name}</h3>
            <h5 className="restaurant-description">{description} </h5>
            <h5 className="restaurant-meta">Rating: {avgRatingString}* </h5>
            <h5 className="restaurant-meta"> {cuisines}</h5>

            <div className="restaurant-details">
                <h5 className="restaurant-meta">{costForTwo}</h5>  
            </div>
        </div>
    </div>
     )
} 
export default RestaurantCardComponent;