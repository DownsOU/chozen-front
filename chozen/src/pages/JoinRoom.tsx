import React, {useState} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonList} from '@ionic/react';

import './Home.css';
import Socket from "../components/Socket";

const JoinRoom: React.FC = () => {
    const [roomCode, setRoomCode] = useState("");
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
                        <IonInput value={roomCode}
                                  placeholder="Enter Room Code"
                                  onIonChange={e => setRoomCode(e.detail.value!)}
                                  clearInput>
                        </IonInput>
                    </IonItem>
                </IonList>
                <IonButton expand="block"
                           onClick={() => Socket.getInstance().joinRoom(roomCode.toUpperCase())}>Join Room</IonButton>
                <div id="confirmation">

                </div>
            </IonContent>
        </IonPage>
    );
};

export default JoinRoom;