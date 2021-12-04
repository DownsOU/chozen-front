import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Home.css';
import Socket from "../components/Socket";
import PageRenderer from "../components/PageRenderer";
import React from "react";

const ResultsPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle color="warning" size="large">Voting Results</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen>
               <p>The WINNING option is: <strong>{Socket.getInstance().getWinningOption()}</strong></p>
            </IonContent>
        </IonPage>
    );
};

export default ResultsPage;