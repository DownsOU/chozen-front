import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';
import React from "react";
import Socket from "../components/Socket";

const WaitingRoom: React.FC = () => {
    Socket.getInstance().openSocket();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle color="warning" size="large">Waiting Room:</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen class="ion-text-center">
                <div id="waitContent">

                </div>
            </IonContent>
        </IonPage>
    );
};

export default WaitingRoom;