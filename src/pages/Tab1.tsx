import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RadioStation from '../components/RadioStation';
import './Tab1.css';

const Tab1: React.FC = () => {
  const radioStations = [
    {
      name: 'Radio Paradise',
      streamUrl: 'http://stream.radioparadise.com/mp3-128',
      description: 'Listener-supported eclectic mix of music'
    },
    {
      name: 'KEXP 90.3 FM',
      streamUrl: 'http://live-mp3-128.kexp.org/kexp128.mp3',
      description: 'Seattle-based independent radio with eclectic music'
    },
    {
      name: 'Jazz24',
      streamUrl: 'http://live.wostreaming.net/direct/ppm-jazz24mp3-ibc1',
      description: '24-hour commercial-free jazz from around the world'
    },
    {
      name: 'WWOZ 90.7 FM',
      streamUrl: 'http://wwoz-sc.streamguys.com/wwoz-hi.mp3',
      description: 'New Orleans community radio - jazz, blues, and local music'
    },
    {
      name: 'Radio Swiss Jazz',
      streamUrl: 'http://stream.srg-ssr.ch/m/rsj/mp3_128',
      description: 'Swiss public radio - jazz music 24/7'
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Radio 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Radio 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="radio-container">
          {radioStations.map((station, index) => (
            <RadioStation
              key={index}
              name={station.name}
              streamUrl={station.streamUrl}
              description={station.description}
            />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
