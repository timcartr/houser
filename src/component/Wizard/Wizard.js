import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Step1 from '../steps/Step1'
import Step2 from '../steps/Step2'
import Step3 from '../steps/Step3'

export default class Wizard extends Component {
    render(){
        return(
            <div className="Wizard">
                <h1>Add New Listing</h1>
                <Link to="/"><button>Cancel</button></Link>
                <Route exact path='/wizard/step1' component={Step1}/>
                <Route exact path='/wizard/step2' component={Step2}/>
                <Route exact path='/wizard/step3' component={Step3}/>
            </div>
        )
    }
}