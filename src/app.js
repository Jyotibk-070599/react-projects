import reacr from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import RestaurantListComponent from "./components/RestaurantListComponent";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter } from "react-router";
import { RouterProvider,Outlet } from "react-router";
import Error from "./components/Error";
const App = () => {
    return (
        <div className="app-shell">
            <HeaderComponent />
            <Outlet />
          </div>
           
        )        
}     

const RoutetApp = createBrowserRouter([ 
    {
      path : "/",
      element:<App />,
      children:[
        {
          path: "/home",
          element :<RestaurantListComponent />
        },{
          path: "/about",
          element :<AboutUs />
        },
        {
          path: "/Contact",
          element :<ContactUs />
        }
      ],
      errorElement: <Error/>
    },

  ])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={RoutetApp} />);