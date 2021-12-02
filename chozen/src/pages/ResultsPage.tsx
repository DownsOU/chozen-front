import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Home.css';
import Socket from "../components/Socket";

const ResultsPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonTitle size="large">Voting Results</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark" fullscreen>
               <p>The winning option is: {Socket.getInstance().getWinningOption()}</p>
            </IonContent>
        </IonPage>
    );
};

export default ResultsPage;