import React from 'react'

function UserCard(props) {

    return (

        <div className="card" style={{ width: "200px" }}>

            <p>{`id - ${props.id}`}</p>
            <p>{`name - ${props.name}`}</p>
            <p>{`age - ${props.age}`}</p>

        </div>
    )
}

export default UserCard




