import { IonContent, IonHeader, IonPage, IonToolbar} from '@ionic/react';
import './Home.css';

const WaitingRoom: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen>
                <div id="waitContent">

                </div>
            </IonContent>
        </IonPage>
    );
};

export default WaitingRoom;