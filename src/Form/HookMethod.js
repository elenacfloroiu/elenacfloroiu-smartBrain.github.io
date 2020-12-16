import React, {useState} from 'react';

const HookMethod = () =>{
    const [fullName, setState] = useState({value:""})
    
   const handleChange = (event) => {    
        setState({value: event.target.value});  }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setState({show: fullName.value});
    }
  
      return(
        <form onSubmit={handleSubmit}>
          <label>
            Name / Hook Method:
            <input type="text" value={fullName.value || ''} onChange={handleChange} /> 
         </label>
          <input type="submit" value="Submit" />
          <p>Your name is: <b>{fullName.show}</b></p>
        </form>
      );
}

export default HookMethod

