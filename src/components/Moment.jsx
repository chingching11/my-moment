import React from "react"

function Moment(props){
    
    function deleteMoment(){
        console.log(props)
        props.onDelete(props.id)
    }

    return(
        <div className="moment">
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <button onClick={deleteMoment}>Delete</button>
        </div>
    )
}

export default Moment;