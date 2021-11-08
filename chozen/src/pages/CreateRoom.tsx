import { IonItem, IonItemDivider, IonInput, IonList, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons} from '@ionic/react';

import './Home.css';
import React, {useState} from "react";

const CreateRoom: React.FC = () => {
    const [text1, setText] = useState<string>();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle color="warning" size="large">Choose Vote Category:</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen>
                <IonList>
                    <IonItem>
                        <IonInput value={text1} placeholder="Enter Category" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
                    </IonItem>
                </IonList>
                <IonButton color="secondary" expand="block" href="createroom2">
                    Create Room
            </IonButton>
                <IonButton color="danger" expand="block" href="home">
                    Back
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default CreateRoom;