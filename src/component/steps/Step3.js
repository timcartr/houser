import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { updateMortgage, updateRent } from '../../ducks/reducer'

class Step3 extends Component {
    constructor(props){
        super(props)

        this.state = {
            propertyname:this.props.propertyname,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            mortgage: this.props.mortgage,
            rent: this.props.rent
        }
    }

    createHouse(body){
        axios.post('/api/createhouse',body)
        this.props.updateMortgage(this.state.mortgage)
        this.props.updateRent(this.state.rent)
    }
    updateMortgage(val){
        this.setState({
            mortgage: val
        })
    }
    updateRent(val){
        this.setState({
            rent: val
        })
    }

    updateStep3(){
        updateMortgage(this.state.mortgage)
        updateRent(this.state.rent)
        this.props.history.goBack
    }

    render(){
        return(
            <div className='Step1'>
                <input type="text" placeholder="Monthly Mortage Amount" onChange={e => this.updateMortgage( e.target.value )} value={this.state.mortgage}/>
                <input type="text" placeholder="Desired Monthly Rent" onChange={e => this.updateRent( e.target.value )} value={this.state.mortgage}/>
                {/* <Link to='/wizard/Step2'> */}
                    <button onClick={ () => this.updateStep3()}>Previous Step</button>
                {/* </Link> */}
                <button onClick={ () => this.createHouse(this.state)}>Complete</button>
            </div>
        )
    }
}
function mapStateToProps(storeState){
    const { propertyname, address, city, state, zip, mortgage, rent } = storeState

    return{
        propertyname,
        address,
        city,
        state,
        zip,
        mortgage,
        rent
    }
}

export default connect( mapStateToProps, {updateMortgage, updateRent} )(Step3)