import User from './User'
import UserClass from './UserClass'
const AboutUs = ()=>{ 
    return (
        <div> 
            <h5>About</h5>
            <h5>Find Good Food Here...!!</h5>
            {/* Functional Component */}
            <User name = { "Jyoti B K (Functional)" } location={"Shivamogga (Functional)"} />
            {/* Class Based Component */}
            <UserClass name = { "Jyoti B K (ClassBased)" } location={"Shivamogga (ClassBased)"}/>
        </div>
    )
}
 export default AboutUs