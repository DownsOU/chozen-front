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
    const [option, setOption] = useState("");
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
                <p>Room Code: <strong>{}</strong></p>
                <IonList>
                    <IonItem>
                        <IonInput value={option} placeholder="Enter Vote Option" onIonChange={e => setOption(e.detail.value!)} clearInput></IonInput>
                    </IonItem>
                </IonList>
                <IonButton color="success" expand="block" onClick={() => Socket.getInstance().addOption(option)}href="votingroom">Submit</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default AddOptions;