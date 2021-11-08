import React, {useState} from 'react';
import TCPSocket from 'react-native-tcp-socket';
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

import './Home.css';

const JoinRoom: React.FC = () => {
    const [text2, setText] = useState<string>();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle color="warning" size="large">Join Room:</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen>
                <IonList>
                    <IonItem>
                        <IonInput value={text2} placeholder="Enter Room Code" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
                    </IonItem>
                </IonList>
                <IonButton expand="block" href="votingroom">Join Room</IonButton>
                <IonButton color="danger" expand="block" href="home">
                    Back
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default JoinRoom;