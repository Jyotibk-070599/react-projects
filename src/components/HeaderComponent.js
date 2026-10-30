import {APP_LOGO ,SEARCH_ICON, CART_ICON, PROFILE_ICON} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const HeaderComponent = () => {
    const [LoginStatus, setLoginStatus] = useState("Login");
    
    return (
        <div className="app-header">
            <div className="brand-container">
                <img className="brand-logo" src={APP_LOGO} alt="Logo" />
            </div>
            <div className="main-navigation">
                <ul className="nav-links">
                    <li> <Link to="/home">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="">Blog</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <button onClick={()=>{
                        LoginStatus === "Login" ?
                        setLoginStatus("Logout") :
                        setLoginStatus("Login")}}>{LoginStatus}</button>
                </ul>
            </div>
            <div className="header-actions">
                <img className="search-icon" src={SEARCH_ICON} alt="Search" />
                <img className="cart-icon" src={CART_ICON} alt="Cart" />
                <img className="profile-icon" src={PROFILE_ICON} alt="Profile" />
            </div>
        </div>
           
        )        
} 

export default HeaderComponent;