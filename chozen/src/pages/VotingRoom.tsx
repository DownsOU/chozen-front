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

const VotingRoom: React.FC = () => {
    const [text3, setText] = useState<string>();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle color="warning" size="large">Choose Selection:</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen>
                <div id="confirm">

                </div>
                <p>Voting Category: <strong>Food Type</strong></p>
                <p>Room Code: <strong>J3B7M</strong></p>
                <IonList>
                    <IonItem>
                        <IonInput value={text3} placeholder="Enter Vote Option" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
                    </IonItem>
                </IonList>
                <IonButton color="success" expand="block" href="finalvoteroom">Submit</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default VotingRoom;