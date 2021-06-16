import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { fetchMessagesBySender,fetchMessagesByReceiver } from '../../api';

const Messages= () => {
    const [sentMessages,setSentMessages] = useState(null)
    const [receivedMessages,setReceivedMessages] = useState(null)
    const [loading,setLoading] = useState(true)
useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("profile")).result;
    Promise.all([fetchMessagesBySender(user._id),
        fetchMessagesByReceiver(user._id)])
        .then((res)=>{
        console.log("hello")
        setReceivedMessages(res[0].data);
        setSentMessages(res[1].data);
        setLoading(false)
        }
        )
},[])
let allMessages;
if (!loading) {
    allMessages = sentMessages.concat(receivedMessages);
}
    if(loading) return (<div>loading ...</div>)
    return (
        <div>
            {allMessages.map((message)=>{
                return (
                <div key={message._id}>
                    <h3>{message.body}</h3>
                </div>
                    )
            })}
        </div>
    )
}

export default Messages
