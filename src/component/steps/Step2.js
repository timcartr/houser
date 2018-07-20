import React, { Component } from 'react'
import { connect } from 'react-redux'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import { updateStoreImage } from '../../ducks/reducer'

class Step2 extends Component {
    constructor(props) {
        super(props)

        this.state ={
            image:this.props.image
        }
    }

    updateImage(val){
        this.setState({
            image: val
        })
    }

    render(){
        return(
            <div className='Step1'>
                <input type="text" placeholder="Image URL" onChange={e => this.updateImage( e.target.value )}/>
                <Link to='/wizard/Step1'><button onClick={ () => this.props.updateStoreImage(this.state.image)}>Previous Step</button></Link>
                <Link to='/wizard/Step3'><button onClick={ () => this.props.updateStoreImage(this.state.image)}>Next Step</button></Link>
            </div>
        )
    }
}
function mapStateToProps(storeState){
    const { image } = storeState

    return{
        image
    }
}

export default connect( mapStateToProps, {updateStoreImage} )(Step2)