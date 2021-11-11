import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import './Home.css';
import RoomCreate from "../components/RoomCreate";
import React from "react";

const CreateRoom2: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle color="success" size="large">Success!</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen>
                <p>Voting Category: <strong>Food Type</strong></p>
                <RoomCreate />
                <IonButton color="primary" expand="block" href="votingroom">
                    Join Room
                </IonButton>
                <div id="creationConfirmation">

                </div>
            </IonContent>
        </IonPage>
    );
};

export default CreateRoom2;