import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RadioStation from '../components/RadioStation';
import './Tab2.css';

const Tab2: React.FC = () => {
  const radioStations = [
    {
      name: 'Frisky Radio',
      streamUrl: 'http://stream2.friskyradio.com:8000/frisky_mp3_hi',
      description: 'Underground electronic music and exclusive DJ mixes'
    },
    {
      name: 'Radio Swiss Classic',
      streamUrl: 'http://stream.srg-ssr.ch/m/rsc_de/mp3_128',
      description: 'Classical music from Switzerland'
    },
    {
      name: 'Radio Swiss Pop',
      streamUrl: 'http://stream.srg-ssr.ch/m/rsp/mp3_128',
      description: 'Pop music from Switzerland'
    },
    {
      name: 'Deep House Lounge',
      streamUrl: 'http://162.244.80.106:9304/stream',
      description: 'Deep house music with live DJ sets and mixes'
    },
    {
      name: 'Chill Out Zone',
      streamUrl: 'http://uk2.internet-radio.com:8000/stream',
      description: 'Relaxing chillout and ambient music'
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Radio 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Radio 2</IonTitle>
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

export default Tab2;
