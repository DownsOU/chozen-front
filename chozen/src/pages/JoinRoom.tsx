import React, {useState} from 'react';
import TCPSocket from 'react-native-tcp-socket';
import RoomJoin from "../components/RoomJoin";
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
    const [roomCode, setRoomCode] = useState("");
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle color="warning" size="large">Join Room:</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen>
                <form action="votingroom"><button id="goToVote" ></button></form>
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
                           onClick={() => RoomJoin(roomCode)}
                           >Join Room</IonButton>
                <IonButton color="danger" expand="block" href="home">
                    Back
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default JoinRoom;