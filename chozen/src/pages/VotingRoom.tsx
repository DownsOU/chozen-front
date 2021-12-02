import { IonSlide, IonicSwiper, IonSlides, IonItemSliding, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import './Home.css';
import React from "react";

const slideOpts = {
    initialSlide: 0,
    speed: 400,
};


const VotingRoom: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar color="dark">
                <IonTitle color="warning" size="large">Choose One:</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent color="dark" fullscreen>
            <IonSlides pager={true} options={slideOpts}>
                <IonSlide>
                    <h1>Pizza</h1>
                </IonSlide>
                <IonSlide>
                    <h1>Burger</h1>
                </IonSlide>
                <IonSlide>
                    <h1>Taco</h1>
                </IonSlide>
                <IonSlide>
                    <h1>Pasta</h1>
                </IonSlide>
                <IonSlide>
                    <h1>Steak</h1>
                </IonSlide>
            </IonSlides>
        </IonContent>
</IonPage>
    );}

export default VotingRoom;