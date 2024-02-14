import { DECREMENT, INCREMENT } from "../Constants/index";
const initialState=0
export const changeCount=(state=initialState,action)=>{
    //console.log("actions",action);
    switch(action.type){
        case INCREMENT:
            return state + action.payload 
        case DECREMENT:
            return state - action.payload
        default:
            return state        
    }
}
//  default changeCount
