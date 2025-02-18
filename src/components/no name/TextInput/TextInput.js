import React from 'react'

function TextInput() {
  return (

<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">@</span>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

)
}

export default TextInput