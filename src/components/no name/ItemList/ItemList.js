import React from 'react'

function ItemList(props) {

    const renderItems = (items) => {
        return items.map((item, index) => <li key={index}>{item}</li>);
      };
      
    return (


        <div>
            <ul>
                
         {  renderItems(props.items) }
            </ul>

        </div>




    )
}

export default ItemList