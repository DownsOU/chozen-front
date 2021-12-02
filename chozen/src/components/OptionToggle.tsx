import {IonItem, IonToggle, IonLabel} from "@ionic/react";
import React, {useState} from 'react';

const OptionToggle: React.FC = (option) => {
    const [checked, setChecked] = useState(false);
    return(
        <IonItem>
            <IonLabel>{option}</IonLabel>
            <IonToggle color="success" checked={checked} onIonChange={e => setChecked(e.detail.checked)}></IonToggle>
        </IonItem>
    )
}
export default OptionToggle;