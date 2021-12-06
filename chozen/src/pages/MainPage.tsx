import WaitingRoom from "./WaitingRoom";
import Socket from "../components/Socket";

const MainPage: React.FC = () => {
    Socket.getInstance().openSocket();
    return (
        <div id="content">
            <WaitingRoom />
        </div>
    )
}
export default MainPage;