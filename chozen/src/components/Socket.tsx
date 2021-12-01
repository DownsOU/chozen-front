import ReactDOM from "react-dom";
import { Redirect, Router } from 'react-router-dom';
import React from 'react';
import {IonButton, IonRedirect} from '@ionic/react';
import {IonReactRouter} from "@ionic/react-router";

class Socket {
    private static instance: Socket;
    public ws: WebSocket;
    private static ready: boolean;
    public static roomID: string;
    private static options: string;
    private static isHost: boolean;
    private constructor() {
        this.ws = new WebSocket("ws://localhost:25565");
        Socket.isHost = false;
        this.ws.onopen = function() {
            Socket.ready = true;
        }
    }
    public static getInstance(): Socket {
        if(!Socket.instance) {
            Socket.instance = new Socket();
        }
        return Socket.instance;
    }

    public createRoom() {
        if (Socket.ready) {
            this.ws.send("request_create_room");
        }
        this.ws.onmessage = function (evt) {
            var received_msg = evt.data;
            var received_split = received_msg.split(" ");
            Socket.getInstance().setRoomID(received_split[1]);
            Socket.isHost = true;
            Socket.getInstance().joinRoom();
            // @ts-ignore
            document.getElementById("goToRoomInfo").click();
            if(Socket.roomID) {
                ReactDOM.render(
                    <p>Room Code: {Socket.roomID}</p>,
                    document.getElementById("roomShare"));
            }
        }
    }

    public joinRoom(room: string = Socket.roomID) {
        var request = "request_join_room ";
        request = request.concat(room)
        if (Socket.ready) {
            this.ws.send(request);
        }
        this.ws.onmessage = function (evt) {
            if (evt.data === "request_join_room_success") {
                return("Joined room".concat(room).concat("successfully"));
            }
        }
    }

    public closeRoom() {
        if(Socket.ready) {
            this.ws.send("close_room");
        }
    }

    public addOption(option: string) {
        var request = "add_option "
        request = request.concat(option);
        if(Socket.ready) {
            this.ws.send(request);
        }
    }

    public setOptions(){
        if(Socket.ready) {
            this.ws.send("get_options");
        }
        this.ws.onmessage = function (evt) {
            Socket.options =  evt.data;
        }
    }
    public getOptions(): string {
        return(Socket.options);
    }

    public getRoomID(): string {
        return(Socket.roomID);
    }
    public setRoomID(id: string) {
        Socket.roomID = id;
    }

}
export default Socket;
