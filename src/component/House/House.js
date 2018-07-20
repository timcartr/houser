import React from 'react'

export default function House(props){
    console.log(props.houses.houseid)
    return(
        <div className="House">
        <p>Property Name: {props.houses.propertyname}</p>
        <p>Property Address: {props.houses.address}</p>
        <p>Property City: {props.houses.city}</p>
        <p>Property State: {props.houses.state}</p>
        <p>Property Zip: {props.houses.zip}</p>
        <button onClick={ () => {props.deleteHouse(props.houses.houseid)}}>Delete</button>
        </div>
    )
}