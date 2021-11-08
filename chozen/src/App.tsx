import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import CreateRoom from "./pages/CreateRoom";
import JoinRoom from "./pages/JoinRoom";
import VotingRoom from "./pages/VotingRoom";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import CreateRoom2 from "./pages/CreateRoom2";
import FinalVoteRoom from "./pages/FinalVoteRoom";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/createroom">
          <CreateRoom />
        </Route>
        <Route exact path="/createroom2"><CreateRoom2 /></Route>
        <Route exact path="/joinroom"><JoinRoom /></Route>
        <Route exact path="/votingroom"><VotingRoom /></Route>
        <Route exact path="/finalvoteroom"><FinalVoteRoom /></Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
