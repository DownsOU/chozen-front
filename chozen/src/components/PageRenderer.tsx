import ReactDOM from "react-dom";
import RoomInfo from "../pages/RoomInfo";
import JoinRoom from "../pages/JoinRoom";
import AddOptions from "../pages/AddOptions";
import AddOptionsHost from "../pages/AddOptionsHost"
import VotingRoom from "../pages/VotingRoom";
import OptionToggle from "./OptionToggle";
import ResultsPage from "../pages/ResultsPage";
import Socket from "./Socket";
import {IonButton, IonSlide} from "@ionic/react";

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

    public renderOptions(opt: string) {
        var optionsArray = opt.split(" ");
        var returnArray: JSX.Element[] = new Array();
        var valid: string[] = new Array();
        for(var i = 1; i < optionsArray.length; i++) {
            if(valid.indexOf(optionsArray[i]) === -1) {
                returnArray.push(
                    <IonSlide>
                        <div className="slide">
                            <h1>{optionsArray[i]}</h1>
                            <b><IonButton expand="block" color="success">Vote!</IonButton></b>
                        </div>
                    </IonSlide>
                )
            }
        }
        return(
            returnArray
        )
    }

}
export default PageRenderer;