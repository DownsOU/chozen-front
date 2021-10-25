import React, {useState} from 'react';
import TCPSocket from 'react-native-tcp-socket';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/react';

import './Home.css';

const JoinRoom: React.FC = () => {
    const [text, setText] = useState<string>();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Join Room</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <p>Enter Room Code:</p>
                <IonInput value={text} placeholder="Enter Room Code" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
                <IonButton href="votingroom">Join Room</IonButton>

            </IonContent>
        </IonPage>
    );
};

export default JoinRoom;