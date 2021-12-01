import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons} from '@ionic/react';
import './Home.css';
import Socket from '../components/Socket';
import ReactDOM from 'react-dom';

const CreateRoom: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle color="warning" size="large">Share Room</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen>
                <div id="roomShare">

                </div>
                <div id="closeRoom">
                </div>
            </IonContent>
        </IonPage>
    );
};

export default CreateRoom;