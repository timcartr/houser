const initialState ={
    propertyname: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    mortgage: 0,
    rent: 0,
}

const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATE = 'UPDATE_STATE'
const UPDATE_ZIP = 'UPDATE_ZIP'
const UPDATE_IMAGE= 'UPDATE_IMAGE'
const UPDATE_MORTGAGE= 'UPDATE_MORTGAGE'
const UPDATE_RENT= 'UPDATE_RENT'

export function updateName(propertyname) {
    return{
            type: UPDATE_NAME,
            payload: propertyname
        }
    }

export function updateAddress(address) {
    return{
            type: UPDATE_ADDRESS,
            payload: address
        }
    }

export function updateCity(city) {
    return{
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return{
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZip(zip) {
    return{
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateStoreImage(image) {
    return{
        type: UPDATE_IMAGE,
        payload: image
    }
}

export function updateMortgage(mortgage) {
    return{
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateRent(rent) {
    return{
        type: UPDATE_RENT,
        payload: rent
    }
}
    
function reducer(state = initialState, action){
    switch( action.type ){
        
        case UPDATE_NAME:
        return Object.assign( {}, state, {propertyname: action.payload})
        
        case UPDATE_ADDRESS:
        return Object.assign( {}, state, {address: action.payload})
        
        case UPDATE_CITY:
        return Object.assign( {}, state, {city: action.payload})
        
        case UPDATE_STATE:
        return Object.assign( {}, state, {state: action.payload})
        
        case UPDATE_ZIP:
        return Object.assign( {}, state, {zip: action.payload})
        
        case UPDATE_IMAGE:
        return Object.assign( {}, state, {zip: action.payload})
        
        case UPDATE_MORTGAGE:
        return Object.assign( {}, state, {mortgage: action.payload})
        
        case UPDATE_RENT:
        return Object.assign( {}, state, {rent: action.payload})
        
        default: return state
    }
}

export default reducer;
    
    // const UPDATE_STEP1 = "UPDATE_STEP1"
    // const UPDATE_STEP2 = "UPDATE_STEP2"
    // const UPDATE_STEP3 = "UPDATE_STEP3"
    
    // case UPDATE_STEP1:
    //     return Object.assign( {}, state, { 
        //         propertyname: action.payload.propertyname,
        //         address: action.payload.address,
        //         city: action.payload.city,
        //         state: action.payload.state,
        //         zip: action.payload.zip
        //     })
        
        // case UPDATE_STEP2:
        //     return Object.assign( {}, state, { propertyname: action.payload })
        
        // case UPDATE_STEP3:
        //     return Object.assign( {}, state, { 
            //         mortgage: action.payload.mortgage,
            //         rent: action.payload.rent
            //     })
            
            
            // export function updateStep1(propertyname, address, city, state, zip) {
            //     return{
            //         type: UPDATE_STEP1,
            //         payload:{
            //             propertyname,
            //             address,
            //             city,
            //             state,
            //             zip
            //         }
            //     }
            // }
            
            // export function updateStep2(image) {
            //     return{
            //         type: UPDATE_STEP1,
            //         payload:image
            //     }
            // }
            
            // export function updateStep3(mortgage, rent) {
            //     return{
            //         type: UPDATE_STEP3,
            //         payload:{
            //             mortgage,
            //             rent
            //         }
            //     }
            // }