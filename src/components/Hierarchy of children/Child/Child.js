import React from 'react'
import Grandson from '../Grandson/Grandson'



function Child(props) {
  return (

    <div>child count = {props.count}

      <Grandson {...props} />

    </div>

  )
}

export default Child