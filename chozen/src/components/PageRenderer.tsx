import ReactDOM from "react-dom";
import MainPage from "../pages/MainPage"
import Home from "../pages/Home";
import RoomInfo from "../pages/RoomInfo";
import JoinRoom from "../pages/JoinRoom";
import AddOptions from "../pages/AddOptions";
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

}
export default PageRenderer;