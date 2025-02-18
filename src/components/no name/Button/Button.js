import React from 'react'

function Button(props) {


  return (
<button type="button" className={`btn ${props.className}`}>{props.text}</button>
  )
}

export default Button