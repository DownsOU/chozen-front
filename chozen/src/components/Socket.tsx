import React from 'react';
import PageRenderer from "./PageRenderer";
import ReactDOM from 'react-dom';

class Socket {
    private static instance: Socket;
    private static ws: WebSocket;
    private static ready: boolean;
    private static roomID: string;
    private static options: string;
    private static isHost: boolean;
    private static winningOption: string;
    private static pr: PageRenderer
    private constructor() {
        Socket.ws = new WebSocket("ws://localhost:25565");
        Socket.isHost = false;
        Socket.pr = new PageRenderer();
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

    public async joinRoom(room: string = Socket.roomID){
        var request = "request_join_room ";
        request = request.concat(room)
        if (Socket.ready) {
            Socket.ws.send(request);
        }
        Socket.ws.onmessage = function () {

        }
        if (!Socket.isHost) {

            await Socket.getInstance().waitForRoomClose(room);
            Socket.pr.renderAddOptions();
        }

    }

    public waitForRoomClose(room: string){
        return new Promise<void>((resolve) => {
            Socket.ws.onmessage = function(msg) {
                if (msg.data === "request_join_room_success") {
                    Socket.getInstance().setRoomID(room);
                    Socket.pr.renderWaitingRoom();
                    ReactDOM.render(<p>Joined Room {Socket.roomID}, Waiting for Host</p>, document.getElementById("waitContent"));
                }
                if(msg.data === "close_room"){
                    resolve();
                }
            }
        });
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
        Socket.pr.renderWaitingRoom();
        await Socket.getInstance().delay(10);
        ReactDOM.render(<p>Waiting for Host to Start Vote</p>, document.getElementById("waitContent"));
        await Socket.getInstance().waitForVote();
        Socket.getInstance().setOptions()
        await Socket.getInstance().delay(100);
        Socket.pr.renderVotingRoom();
    }

    public waitForVote() {
        return new Promise<void>((resolve) => {
            Socket.ws.onmessage = function(msg) {
                if(msg.data === "start_vote"){
                    resolve();
                }
            }
        });
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

    public endVote() {
        if(Socket.ready) {
            Socket.ws.send("force_end_vote");
        }
        Socket.ws.onmessage = function (evt) {
            Socket.getInstance().setWinningOption(evt.data.split(" ")[1]);
            Socket.pr.renderResultsPage();
        }
    }

    public async userDoneVoting() {
        Socket.pr.renderWaitingRoom();
        await Socket.getInstance().delay(10);
        ReactDOM.render(<p>Waiting on Results</p>, document.getElementById("waitContent"));
        await Socket.getInstance().waitForResults();
        Socket.pr.renderResultsPage();
    }

    public waitForResults() {
        return new Promise<void>((resolve) => {
            Socket.ws.onmessage = function(msg) {
                if(msg.data.includes("winning_option")){
                    Socket.getInstance().setWinningOption(msg.data.split(" ")[1]);
                    resolve();
                }
            }
        });
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

    public getSocket(): WebSocket {
        return(Socket.ws);
    }

    public setSocket(socket: WebSocket) {
        Socket.ws = socket;
    }

    private delay(milliseconds: number) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
}

export default Socket;
