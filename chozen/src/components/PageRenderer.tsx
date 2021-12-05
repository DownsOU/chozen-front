import ReactDOM from "react-dom";
import RoomInfo from "../pages/RoomInfo";
import JoinRoom from "../pages/JoinRoom";
import AddOptions from "../pages/AddOptions";
import AddOptionsHost from "../pages/AddOptionsHost"
import VotingRoom from "../pages/VotingRoom";
import VotingRoomHost from "../pages/VotingRoomHost";
import WaitingRoom from "../pages/WaitingRoom";
import ResultsPage from "../pages/ResultsPage";
import {IonButton, IonSlide} from "@ionic/react";
import Socket from "./Socket";
import React from "react";

class PageRenderer {

    public renderJoinRoom() {
        ReactDOM.render(<JoinRoom />, document.getElementById("content"));
    }

    public renderRoomInfo() {
        ReactDOM.render(<RoomInfo />, document.getElementById("content"));
    }

    public renderAddOptions() {
        ReactDOM.render(<AddOptions />, document.getElementById("content"));
    }

    public renderAddOptionsHost() {
        ReactDOM.render(<AddOptionsHost />, document.getElementById("content"));
    }

    public renderVotingRoom() {
        ReactDOM.render(<VotingRoom />, document.getElementById("content"));
    }

    public renderVotingRoomHost() {
        ReactDOM.render(<VotingRoomHost />, document.getElementById("content"));
    }

    public renderResultsPage() {
        ReactDOM.render(<ResultsPage />, document.getElementById("content"));
    }

    public renderWaitingRoom() {
        ReactDOM.render(<WaitingRoom />, document.getElementById("content"));
    }

    public renderOptions(opt: string) {
        var optionsArray = opt.split(" ");
        var returnArray: JSX.Element[] = [];
        for(var i = 1; i < optionsArray.length; i++) {
            returnArray.push(
                <IonSlide>
                    <div className="slide" id="voteSlide">
                        <h1>{optionsArray[i]}</h1>
                        <b><IonButton className="yes" expand="block" color="success" onClick={function(e) {
                            return function() {
                            Socket.getInstance().sendYesVote(optionsArray[e])
                            }}(i)}>Yes</IonButton></b>
                        <b><IonButton className="no" expand="block" color="danger" onClick={function(e) {
                            return function() {
                                Socket.getInstance().sendNoVote(optionsArray[e])
                                }}(i)}>No</IonButton></b>
                    </div>
                    <b/>
                    <div id="alreadyVotedWarning">

                    </div>
                </IonSlide>
            )
        }
        returnArray.push(
            <IonSlide>
                <div className="slide">
                    <b><IonButton expand="block" color="danger" onClick={() => Socket.getInstance().userDoneVoting()}>Done Voting</IonButton></b>
                </div>
            </IonSlide>

        )
        return(
            returnArray
        )
    }

    public renderOptionsHost(opt: string) {
        var optionsArray = opt.split(" ");
        var returnArray: JSX.Element[] = [];
        for(var i = 1; i < optionsArray.length; i++) {
            returnArray.push(
                <IonSlide>
                    <div className="slide" id="voteSlide">
                        <h1>{optionsArray[i]}</h1>
                        <b><IonButton className="yes" expand="block" color="success" onClick={function(e) {
                            return function() {
                                Socket.getInstance().sendYesVote(optionsArray[e])
                            }}(i)}>Yes</IonButton></b>
                        <b><IonButton className="no" expand="block" color="danger" onClick={function(e) {
                            return function() {
                                Socket.getInstance().sendNoVote(optionsArray[e])
                            }}(i)}>No</IonButton></b>
                    </div>
                    <b/>
                    <div id="alreadyVotedWarning">

                    </div>
                </IonSlide>
            )
        }
        returnArray.push(
            <IonSlide>
                <div className="slide">
                    <b><IonButton expand="block" color="danger" onClick={() => Socket.getInstance().endVote()}>Get Winner</IonButton></b>
                </div>
            </IonSlide>

        )
        return(
            returnArray
        )
    }
}
export default PageRenderer;