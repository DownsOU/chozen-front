import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput} from '@ionic/react';
import React, {useState} from 'react';
import './Home.css';

const VotingRoom: React.FC = () => {
    const [text, setText] = useState<string>();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Room Code: J3B7M</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <p>Enter Vote Option:</p>
                <IonInput value={text} placeholder="Enter Option" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
                <IonButton>Enter Option</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default VotingRoom;