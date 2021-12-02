import ReactDOM from "react-dom";
import RoomInfo from "../pages/RoomInfo";
import JoinRoom from "../pages/JoinRoom";
import AddOptions from "../pages/AddOptions";
import AddOptionsHost from "../pages/AddOptionsHost"
import VotingRoom from "../pages/VotingRoom";
import ResultsPage from "../pages/ResultsPage";

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

}
export default PageRenderer;