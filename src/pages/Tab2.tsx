import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RadioStation from '../components/RadioStation';
import { allRadioStations } from '../data/radioStations';
import './Tab2.css';

const Tab2: React.FC = () => {
  // Filter stations for Electronic, Dance, Pop, Rock, and other genres
  const radioStations = allRadioStations.filter(station => {
    const tags = (station.tags || '').toLowerCase();
    const name = station.name.toLowerCase();
    const isJazzOrClassical = tags.includes('jazz') || 
                             tags.includes('blues') || 
                             tags.includes('classical') ||
                             tags.includes('smooth jazz') ||
                             name.includes('jazz') ||
                             name.includes('blues') ||
                             name.includes('classic');
    
    return !isJazzOrClassical; // Show everything else in Tab2
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Electronic & Dance</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Electronic & Dance</IonTitle>
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

export default Tab2;
