import { useState } from "react";

const ContactUs = () =>{
    // UseState
    const [count, setCount] = useState(0);

    // // UseEffect
    // useEffect(() => {
    //     callAPI()
    // },[])

    // const callAPI = async ()=>{ 
    //     let response = await fetch('API url');
    //     let json = await response.json();
    //     // You can access the json and use 
    // }

    // usememo()
    return(
        <>
            <h1>Contact Us</h1>
            <h1>Using UseState: {count}</h1>
            <button onClick={()=>setCount(count + 1)}> Click Me</button>
        </>
    )
}

export default ContactUs;