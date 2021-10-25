import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import TCPSocket from 'react-native-tcp-socket';

import './Home.css';

const options = ({
    port: 25565,
    host: "192.168.1.190"
});
{/*}
const client = TCPSocket;

const client = TCPSocket.createConnection(options, () => {
    client.write("request_create_room");
});
*/}

const CreateRoom: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Room Code: LOREM</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <p>Room has been created!</p>
                <p>Room Code: <strong>LOREM</strong></p>
            </IonContent>
        </IonPage>
    );
};

export default CreateRoom;