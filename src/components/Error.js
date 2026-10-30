import { useRouteError } from "react-router"
const Error = ()=>{ 
    const error = useRouteError()
    return (
        <div> 
            <h2>Oooopsss...!!!</h2>
            <h5>Something Went Wrong...!!!</h5>
            <h5> { error.status }</h5>
        </div>
    )
}
 export default Error