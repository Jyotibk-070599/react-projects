import {APP_LOGO ,SEARCH_ICON, CART_ICON, PROFILE_ICON} from "../utils/constants";
const HeaderComponent = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={APP_LOGO} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul className="nav-food">
                    <li>Home</li>
                    <li>Pickles</li>
                    <li>Podis</li>
                    <li>Sweets</li>
                    <li>Snacks</li>
                </ul>
                <ul className="nav-other">    
                    <li>Our Story</li>
                    <li>Recipes</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="nav-profile">
                <img className="search" src={SEARCH_ICON} alt="Search" />
                <img className="cart" src={CART_ICON} alt="Cart" />
                <img className="profile" src={PROFILE_ICON} alt="Profile" />
            </div>
        </div>
           
        )        
} 

export default HeaderComponent;