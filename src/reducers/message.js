import { DELETEMESSAGE, ERROR } from "../_constants/actionTypes";

const messagesReducer= (message=null, action)=>{
    
    switch (action.type) {
        case ERROR:
            return {type:"ERROR",message:action.payload};
        case DELETEMESSAGE:
            return null;
        default:
            return message;
    }
   }

export default messagesReducer;