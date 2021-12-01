import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonItem,
    IonList
} from '@ionic/react';
import React, {useState} from 'react';
import './Home.css';
import Socket from "../components/Socket";

const AddOptions: React.FC = () => {
    const [text3, setText] = useState<string>();
    const roomID = Socket.getInstance().getRoomID();
    alert(roomID)
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle color="warning" size="large">Add Option</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen>
                <div id="confirm">

                </div>
                <p>Room Code: <strong>{roomID}</strong></p>
                <IonList>
                    <IonItem>
                        <IonInput value={text3} placeholder="Enter Vote Option" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
                    </IonItem>
                </IonList>
                <IonButton color="success" expand="block" href="votingroom">Submit</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default AddOptions;