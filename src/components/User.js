//Functional Component
const User = (props) =>{ 
    const {name,location } = props
    return (
        <div>
            <h4>Name: {name }</h4>
            <h4>Location:{location}</h4>
        </div>
    )
}

export default User