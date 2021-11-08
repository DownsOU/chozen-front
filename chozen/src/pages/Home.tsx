import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle size="large">ChoZen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="dark" fullscreen>
          <IonButton color="secondary" expand="block" href="createroom">
              Create Room
          </IonButton>
          <IonButton expand="block" href="joinroom">
              Join Room
          </IonButton>
          {/*} <ExploreContainer />*/}
      </IonContent>
    </IonPage>
  );
};

export default Home;
