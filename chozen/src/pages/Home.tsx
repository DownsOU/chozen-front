import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Home.css';
import Socket from "../components/Socket";

const Home: React.FC = () => {
    const socket = Socket.getInstance();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle size="large">ChoZen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="dark" fullscreen>
          <IonButton color="secondary" expand="block" onClick={() => Socket.getInstance().createRoom()}>
              Create Room
          </IonButton>
          <IonButton expand="block" href="joinroom">
              Join Room
          </IonButton>
          <form action="roomInfo"><button id="goToRoomInfo" ></button></form>
      </IonContent>
    </IonPage>
  );
};

export default Home;
