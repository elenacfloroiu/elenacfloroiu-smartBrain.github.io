import React, {useState} from 'react';
import Person from '../Person/Person';

const Name = () =>{
    const [fullName, setName] = useState('')
   
    const handleSubmit = (e) =>{
        // meaning that the default action that belongs to the event will not occur.
        e.preventDefault()
        // Clicking on a "Submit" button, prevent it from submitting a form
    }

    const handleInputChange = (event) =>{
        setName(event.target.value)
    }

    const switchNameHandler = () =>{
        setName({show:fullName.target.value})
    }

    return(
        <div>
            <p> This is my name</p>
            <form onSubmit = {handleSubmit}>
            </form>
            {/* <Person name={fullName.target.show}/> */}
            <input
                value={fullName}
                onChange = {handleInputChange}
            />
        <button onCLick={switchNameHandler}>Change Name</button>
        </div>
    )
    
}

export default Name;