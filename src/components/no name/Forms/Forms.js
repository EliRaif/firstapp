import React from 'react'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'



function Forms(props) {
  return (
    <div>

<Button type="button" className={props.className} text={props.text}/>
<TextInput/>



    </div>
  )
}

export default Forms