import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonList} from '@ionic/react';
import React, {useState} from 'react';
import './Home.css';
import Socket from "../components/Socket";

const AddOptionsHost: React.FC = () => {
    const [option, setOption] = useState("");
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle color="warning" size="large">Add Options</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen>
                <p>Room Code: <strong>{Socket.getInstance().getRoomID()}</strong></p>
                <IonList>
                    <IonItem>
                        <IonInput value={option} placeholder="Enter Vote Option" onIonChange={e => setOption(e.detail.value!)} clearInput></IonInput>
                    </IonItem>
                </IonList>
                <IonButton color="success" expand="block" onClick={() => Socket.getInstance().addOption(option)}>Submit</IonButton>
                <IonButton color="danger" expand="block" onClick={() => Socket.getInstance().startVote()}>Ready To Vote!</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default AddOptionsHost;