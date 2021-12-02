import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Home.css';
import Socket from "../components/Socket";
import PageRenderer from "../components/PageRenderer";

const WaitingRoom: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen>
            </IonContent>
        </IonPage>
    );
};

export default WaitingRoom;