import React from 'react';
import ReactDOM from "react-dom";
import PageRenderer from "./PageRenderer";
import JoinRoom from "../pages/JoinRoom";


class Socket {
    private static instance: Socket;
    private static ws: WebSocket;
    private static ready: boolean;
    private static roomID: string;
    private static options: string;
    private static isHost: boolean;
    private static winningOption: string;
    private static pr: PageRenderer
    private static showResults: Worker;
    private constructor() {
        Socket.ws = new WebSocket("ws://localhost:25565");
        Socket.isHost = false;
        Socket.pr = new PageRenderer();
        Socket.showResults = new Worker('./SkipToResults');
        Socket.ws.onopen = function() {
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
            Socket.ws.send("request_create_room");
        }
        Socket.ws.onmessage = function (evt) {
            var received_msg = evt.data;
            var received_split = received_msg.split(" ");
            Socket.getInstance().setRoomID(received_split[1]);
            Socket.isHost = true;
            Socket.getInstance().joinRoom();
            Socket.pr.renderRoomInfo();
        }
    }

    public joinRoom(room: string = Socket.roomID) {
        var request = "request_join_room ";
        request = request.concat(room)
        if (Socket.ready) {
            Socket.ws.send(request);
        }
        Socket.ws.onmessage = function (evt) {
            if (evt.data === "request_join_room_success") {
                if(!Socket.isHost) {
                    Socket.getInstance().setRoomID(room);
                    Socket.pr.renderAddOptions();
                }
            }
        }
    }

    public closeRoom() {
        if(Socket.ready) {
            Socket.ws.send("close_room");
            Socket.pr.renderAddOptionsHost();
        }
    }

    public addOption(option: string) {
        var request = "add_option "
        request = request.concat(option);
        if(Socket.ready) {
            Socket.ws.send(request);
        }
    }

    public setOptions() {
        if(Socket.ready) {
            Socket.ws.send("get_options");
        }
        Socket.ws.onmessage = function (evt) {
            Socket.options =  evt.data;
        }
    }
    public getOptions(): string {
        return(Socket.options);
    }

    public async startVote() {
        if(Socket.ready) {
            Socket.ws.send("start_vote");
            await Socket.getInstance().delay(100);
            Socket.getInstance().setOptions();
            await Socket.getInstance().delay(100);
            Socket.pr.renderVotingRoomHost();
        }
    }

    public async userStartVote() {
        Socket.getInstance().setOptions()
        await Socket.getInstance().delay(100);
        Socket.pr.renderVotingRoom();
    }

    public sendYesVote(option: string) {
        var request = "input_vote ";
        request = request.concat(option);
        request = request.concat(" yes");
        if(Socket.ready) {
            Socket.ws.send(request);
        }
    }

    public sendNoVote(option: string) {
        var request = "input_vote ";
        request = request.concat(option);
        request = request.concat(" no");
        if(Socket.ready) {
            Socket.ws.send(request);
        }
    }

    public async endVote() {
        if(Socket.ready) {
            Socket.ws.send("force_end_vote");
        }
        Socket.ws.onmessage = function (evt) {
            Socket.getInstance().setWinningOption(evt.data.split(" ")[1]);
            Socket.pr.renderResultsPage();
            Socket.showResults.postMessage("message");
        }
    }

    public getRoomID(): string {
        return(Socket.roomID);
    }
    public setRoomID(id: string) {
        Socket.roomID = id;
    }

    public getWinningOption(): string {
        return(Socket.winningOption);
    }
    public setWinningOption(opt: string) {
        Socket.winningOption = opt;
    }

    private delay(milliseconds: number) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }


}
export default Socket;
