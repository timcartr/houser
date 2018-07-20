import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { updateName } from '../../ducks/reducer'
import { updateAddress } from '../../ducks/reducer'
import { updateCity } from '../../ducks/reducer'
import { updateState } from '../../ducks/reducer'
import { updateZip } from '../../ducks/reducer'


class Step1 extends Component {
    constructor(props){
        super(props)

        this.state = {
            propertyname: this.props.propertyname,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
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

    updateStep1(){
        this.props.updateName(this.state.propertyname)
        this.props.updateAddress(this.state.address)
        this.props.updateCity(this.state.city)
        this.props.updateState(this.state.state)
        this.props.updateZip(this.state.zip)
    }

    

    render(){
        const { updateStep1 } = this.props
        let { propertyname, address, city, state, zip } = this.state
        return(
            <div className='Step1'>
                <input type="text" placeholder="Name" onChange={e => this.updateName( e.target.value )}/>
                <input type="text" placeholder="Address" onChange={e => this.updateAddress( e.target.value )}/>
                <input type="text" placeholder="City" onChange={e => this.updateCity( e.target.value )}/>
                <input type="text" placeholder="State" onChange={e => this.updateState( e.target.value )}/>
                <input type="number" placeholder="Zip" onChange={e => this.updateZip( e.target.value )}/>
                <Link to='/wizard/Step2'><button onClick={ () => this.updateStep1()}>Next Step</button></Link>
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    const { propertyname, address, city, state, zip } = reduxState

    return{
        propertyname,
        address,
        city,
        state,
        zip
    }
}

export default connect( mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZip })(Step1)