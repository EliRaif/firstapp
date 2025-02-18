import React from 'react'


function Grandson(props) {


  

  return (

    <div>Grandson count = {props.count}   <br/>
    
    <button onClick={() => props.setCount(props.count + 10000)}>Grandson Increment</button> 


    
    </div>

  )
}

export default Grandson