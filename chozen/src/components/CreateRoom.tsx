import React, {Component, useState} from 'react';
import ReactDOM from "react-dom";
import JoinRoom from "./JoinRoom";

const CreateRoom: React.FC =() =>{
    var [roomID, setRoomID] = useState("");
    React.useEffect(() => {
        const ws = new WebSocket("ws://localhost:25565");
        ws.onopen = function () {
            ws.send("request_create_room");
        }
        ws.onmessage = function(evt) {
            var received_msg = evt.data;
            var received_split = received_msg.split(" ");
            setRoomID(received_split[1]);
        }
    }, []);

    return(
        <div className="CreateRoom">
            <p>Room Created: {roomID}</p>
        </div>
    );
}
export default CreateRoom;
