import React, {Component, useState} from 'react';
import ReactDOM from "react-dom";
import RoomJoin from "./RoomJoin";

const RoomCreate: React.FC = () => {
    var [roomID, setRoomID] = useState("");
    React.useEffect(() => {
        const ws = new WebSocket("ws://localhost:25565");
        ws.onopen = function () {
            ws.send("request_create_room");
        }
        ws.onmessage = function(evt) {
            var received_msg = evt.data;
            var received_split = received_msg.split(" ");
            setRoomID = (received_split[1]);
        }
    }, []);

    return(
        <div className="RoomCreate">
            <p>Room Code: <strong>{roomID}</strong></p>
        </div>
    );
}
export default RoomCreate;
