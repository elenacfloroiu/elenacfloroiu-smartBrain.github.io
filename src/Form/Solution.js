import React from 'react'

class Solution extends React.Component{
    state={
        value:'',
        show:''
     }

handleChange=(e)=>{
 this.setState({value:e.target.value})
}

submit=(event)=>{
  this.setState({show:this.state.value})
  event.preventDefault();
}

render(){
   return(
       <div>
         <form onClick={this.submit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" />
         </form>
         <h2>{this.state.show}</h2>
       </div>
       )
   }
}

export default Solution 