import { DELETEMESSAGE, ERROR , SUCCESS } from "../_constants/actionTypes";

const messagesReducer= (message=null, action)=>{
    
    switch (action.type) {
        case ERROR:
            return {type:"ERROR",message:action.payload};
        case SUCCESS:
            return {type:"SUCCESS",message:action.payload};
        case DELETEMESSAGE:
            return null;
        default:
            return message;
    }
   }

export default messagesReducer;