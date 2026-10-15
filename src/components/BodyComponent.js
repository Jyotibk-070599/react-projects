import pickleList from "../utils/mockData";
import PickleCard from "./PickleCard";

const BodyComponent = () => {
    return(
        <div className="body-container">
            <div className="body-heading"> 
                <h3>Our Collections</h3>
                <h1>Taste the Tradition</h1>
            </div>
            <div className="pickle-container">
                {pickleList.map((pickleItem) => (<PickleCard key={pickleItem.id} pickleObj = {pickleItem}/>))}
            </div>
           
        </div>
    )
}  

export default BodyComponent;