import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// const initialState = {
//     name: 'name',
//     address: 'address',
//     city: 'city',
//     state: 'state',
//     zipcode: 'zipcode'
// }

export default class Wizard extends Component {
    constructor(){
        super()

        this.state = {
            propertyname: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }
    createHouse(body){
        axios.post('/api/createhouse',body)
    }
    updateName(val){
        this.setState({
            propertyname: val
        })
    }
    updateAddress(val){
        this.setState({
            address: val
        })
    }
    updateCity(val){
        this.setState({
            city: val
        })
    }
    updateState(val){
        this.setState({
            state: val
        })    
    }
    updateZip(val){
        this.setState({
            zip: val
        })    
    }
    render(){
        return(
            <div className="Wizard">
                <h1>Add New Listing</h1>
                <input type="text" placeholder="Name" onChange={e => this.updateName( e.target.value )}/>
                <input type="text" placeholder="Address" onChange={e => this.updateAddress( e.target.value )}/>
                <input type="text" placeholder="City" onChange={e => this.updateCity( e.target.value )}/>
                <input type="text" placeholder="State" onChange={e => this.updateState( e.target.value )}/>
                <input type="number" placeholder="Zip" onChange={e => this.updateZip( e.target.value )}/>
                <button onClick={ () => this.createHouse(this.state)}>Complete</button>
                <Link to="/"><button>Cancel</button></Link>
            </div>
        )
    }
}