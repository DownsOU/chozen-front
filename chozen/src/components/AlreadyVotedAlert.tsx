import {IonAlert} from "@ionic/react";
import React, {useState} from "react";

const AlreadyVotedAlert: React.FC = () => {
    const [showAlert, setShowAlert] = useState(true);
    return(
        <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header={'Alert'}
            message={'You cannot vote on an option more than once'}
            buttons={['Dismiss']}
        />
    )
}
export default AlreadyVotedAlert;