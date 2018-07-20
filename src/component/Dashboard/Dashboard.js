import React, { Component } from 'react'
import House from '../House/House';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(){
        super()

        this.state ={
            houses: []
        }
        this.deleteHouse=this.deleteHouse.bind(this)
    }

    componentDidMount() {
        axios.get('/api/all')
        .then( results => {
            this.setState({
                houses: results.data
            })
        })
    }

    deleteHouse(houseId){
        axios.delete(`/api/deletehouse/${houseId}`)
    }

    render(){
        let mappedHouses = this.state.houses.map( (e,i) => {
            return(
                <House key={i} houses={this.state.houses[i]}
                                deleteHouse = {this.deleteHouse}/>
            )
        })
        return(
            <div className="Dashboard">
            Dashboard
            <Link to="/wizard/step1"><button>Add New Property</button></Link>
            { mappedHouses }
            </div>
        )
    }
}