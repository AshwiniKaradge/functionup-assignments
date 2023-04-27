import  React, {Fragment, useState} from 'react'

function Update(){

    const[name, setName]= useState ("Ashwini")

    function nameUpdate(event){

        setName(event.target.value)
    }

    function submission(){

        console.log("Hi, My name is", {name})
    }

    return(
        <Fragment>

            <input
            
            className="input"
            placeholder="Add your name..."
            onChange = {nameUpdate}
        />

        <button onClick={submission}>Submit</button>

        <h4>Hi ,My name is {name} </h4>

        </Fragment>
    )

}

export default Update;