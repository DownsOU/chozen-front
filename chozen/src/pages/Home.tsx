import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Home.css';
import Socket from "../components/Socket";
import PageRenderer from "../components/PageRenderer";

const Home: React.FC = () => {
    const pr = new PageRenderer();
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
          <IonButton expand="block"  onClick={() => pr.renderJoinRoom()} >
              Join Room
          </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
