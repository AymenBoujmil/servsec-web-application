import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";

function ServiceRequestForm() {
    const {id} =useParams()
    const dispatch = useDispatch();
    const history=useHistory();
    const location = useLocation();
    const service = useSelector(state => state.services.find(s => s._id === id));
    const requestData = useSelector(state => state.rqDatas.find(r => r.serviceId === service._id));
    return (
        <div>
            <form>
                <div>
                    
                </div>
            </form>
        </div>
    )
}

export default ServiceRequestForm
