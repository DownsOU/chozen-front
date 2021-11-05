import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import './Home.css';

const CreateRoom: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Room Code: J3B7M</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <p>Room has been created!</p>
                <p>Room Code: <strong>J3B7M</strong></p>
            </IonContent>
        </IonPage>
    );
};

export default CreateRoom;