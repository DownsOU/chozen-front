import {IonSlide, IonButton} from "@ionic/react";

const OptionToggle: React.FC = (opt) => {
    return (
       <IonSlide>
           <h1>{opt}</h1>
           <IonButton expand="block" color="Success">Vote!</IonButton>
       </IonSlide>
    )
}
export default OptionToggle;