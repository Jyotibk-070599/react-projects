const PickleCard = ({pickleObj}) => {
    const { name, image, rating,quantity, price, description} = pickleObj;
     return( <div className="body-pickle-container"> 
        <div className="body-pickle-card">
            <img className="pickle-image" src={image} alt="Pickle" />
            <h3 className="pickle-name">{name}</h3>
            <h5 className="pickle-dsc">{description} </h5>
            <h5 className="details">Rating: {rating}* </h5>
            <div className="pickle-details">
                <h5 className="details">Quantity: {quantity}</h5>
                <h5 className="details">Price: ₹{price}</h5>  
            </div>
        </div>
    </div>
     )
} 
export default PickleCard;