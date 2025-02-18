import React, { useState } from 'react'

function Counter1(props) {

  const [count, setCount] = useState(props.value);


  return (


    <div>

      <p>count:{count}</p>


      <button onClick={() => setCount(count + 1)}>plus</button>
      <button onClick={() => setCount(count - 1)}>minus</button>


    </div>


  )
}

export default Counter1