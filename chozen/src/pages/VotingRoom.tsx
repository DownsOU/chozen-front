import { IonSlide, IonicSwiper, IonSlides, IonItemSliding, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import './Home.css';
import React, {useState} from "react";
import Socket from "../components/Socket";
import PageRenderer from "../components/PageRenderer";

const slideOpts = {
    initialSlide: 0,
    speed: 400,
};

const VotingRoom: React.FC = () => {
    const pr = new PageRenderer();
    var opts = Socket.getInstance().getOptions()
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar color="dark">
                <IonTitle color="warning" size="large">Vote</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent color="dark" fullscreen>
            <IonSlides pager={true} options={slideOpts}>
                {pr.renderOptions(opts)}
            </IonSlides>
        </IonContent>
</IonPage>
    );}

export default VotingRoom;