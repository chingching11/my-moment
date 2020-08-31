import React , { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import CreateMoment from "./CreateMoment"
import Moment from "./Moment"

function App(){
    
    //array of moments
    const [moments, setMoments] = useState([]);

    //this function will be passed to CreateMoment, so that can add new moment to the array
    function addMoment(newMoment){
        setMoments(prevMoments => {
            return [...prevMoments, newMoment]
        })
    }

    function deleteMoment(id){
        setMoments(prevMoments => {
            return prevMoments.filter((moment,index) =>{
                return index !== id
            })
        })
    }
    
    return(
        <div>
            <Header />
            <CreateMoment onAdd={addMoment}/>
            {moments.map(
                (moment,index) => {
                    return(
                        <Moment 
                            key={index}
                            id={index}
                            title={moment.title}
                            content={moment.content}
                            onDelete={deleteMoment}
                        />
                    )
                }
            )}
          
            <Footer />
        </div>
      
    ) 
}

export default App;