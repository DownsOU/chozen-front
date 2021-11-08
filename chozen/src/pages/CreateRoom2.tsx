import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import './Home.css';

const CreateRoom2: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle color="success" size="large">Success!</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen>
                <p>The room has been created <strong>successfully!</strong></p>
                <p>Voting Category: <strong>Food Type</strong></p>
                <p>Room Code: <strong>J3B7M</strong></p>
                <IonButton color="primary" expand="block" href="votingroom">
                    Join Room
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default CreateRoom2;