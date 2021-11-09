import React, {Component, useState} from 'react';

interface room {
    roomData: string;
}

const JoinRoom =(props: room)=> {
    const [confirmationMessage, setConfirmationMessage] = useState("");
    React.useEffect(() => {
        var request = "request_join_room "
        request = request.concat(props.roomData);
        const ws = new WebSocket("ws://localhost:25565");
        ws.onopen = function() {
            ws.send(request);
        };
        ws.onmessage = function(evt) {
            if(evt.data === "request_join_room_success") {
                setConfirmationMessage("Successfully")
            }
        }

    }, []);
    return(
        <div className="JoinRoom">
            <p>Joined Room {props.roomData} {confirmationMessage}</p>
        </div>
    );
}
export default JoinRoom;