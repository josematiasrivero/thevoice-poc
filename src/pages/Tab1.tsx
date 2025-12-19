import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RadioStation from '../components/RadioStation';
import { allRadioStations } from '../data/radioStations';
import './Tab1.css';

const Tab1: React.FC = () => {
  // Filter stations for Jazz, Blues, Classical, and related genres
  const radioStations = allRadioStations.filter(station => {
    const tags = (station.tags || '').toLowerCase();
    const name = station.name.toLowerCase();
    return tags.includes('jazz') || 
           tags.includes('blues') || 
           tags.includes('classical') || 
           tags.includes('smooth jazz') || 
           name.includes('jazz') || 
           name.includes('blues') ||
           name.includes('classic') ||
           tags.includes('easy listening') ||
           tags.includes('lounge') ||
           tags.includes('relax');
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Jazz & Blues</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Jazz & Blues</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="radio-container">
          {radioStations.map((station, index) => (
            <RadioStation
              key={index}
              name={station.name}
              streamUrl={station.streamUrl}
              description={station.description}
              favicon={station.favicon}
              country={station.country}
              tags={station.tags}
            />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
