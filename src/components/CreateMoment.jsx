import React , { useState } from "react"

function CreateMoment(props){
    const today = new Date().toLocaleString();

    const [moment,setMoment] = useState({
        title: today,
        content: ""
    })
    
    //handle textarea change
    function handleChange(event){
       const { name, value } = event.target;

       setMoment(prevMoment => {
           return {
               ...prevMoment,
               [name] : value
           }
       })
    }


    function submitMoment(event){
        props.onAdd(moment)
        setMoment({
            title: today,
            content: ""
        })
        event.preventDefault();

    }


    return (
        <div className="create-moment">
            <h4>{moment.title}</h4>
            <form>
               <textarea 
                    name="content"
                    onChange={handleChange}
                    value = {moment.content}
                    placeholder="Write your moment ..."  />

            </form>
            <button type="submit" onClick={submitMoment}>Add</button>
        </div>
    )
}

export default CreateMoment;