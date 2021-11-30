import React, {Component, useState} from 'react';
import {IonAlert} from '@ionic/react';
import ReactDOM from "react-dom";


const RoomJoin = (room: string)=> {
    var confirmationMessage: string;
    var request = "request_join_room "
    request = request.concat(room);
    const ws = new WebSocket("ws://localhost:25565");
    ws.onopen = function() {
        ws.send(request);
    };
    ws.onmessage = function(evt) {
        if(evt.data === "request_join_room_success") {
            confirmationMessage = "Successfully";
            // @ts-ignore
            document.getElementById("goToVote").click();
            return(
                ReactDOM.render(
                    <p>Joined Room {room} {confirmationMessage}</p>,
                    document.getElementById('confirm')
                )

            );
        }
    }


}
export default RoomJoin;