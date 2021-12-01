import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import './Home.css';
import RoomCreate from "../components/RoomCreate";
import React from "react";
import Socket from "../components/Socket";

const RoomInfo: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle color="success" size="large">Success!</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen>
                <p>Room Code: <strong>{Socket.getInstance().getRoomID()}</strong></p>
                <IonButton color="primary" expand="block" onClick={() => Socket.getInstance().closeRoom()} href="addOptions">
                    Join Room
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default RoomInfo;