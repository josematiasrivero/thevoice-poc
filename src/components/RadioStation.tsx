import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonIcon } from '@ionic/react';
import { play, pause, volumeHigh } from 'ionicons/icons';
import { useRadioPlayer } from '../contexts/RadioPlayerContext';
import './RadioStation.css';

interface RadioStationProps {
  name: string;
  streamUrl: string;
  description?: string;
}

const RadioStation: React.FC<RadioStationProps> = ({ name, streamUrl, description }) => {
  const { currentStation, isPlaying, isLoading, playStation, pauseStation } = useRadioPlayer();
  
  const isCurrentStation = currentStation?.streamUrl === streamUrl;
  const isCurrentlyPlaying = isCurrentStation && isPlaying;

  const togglePlay = () => {
    if (isCurrentlyPlaying) {
      pauseStation();
    } else {
      playStation({ name, streamUrl, description });
    }
  };

  return (
    <IonCard className="radio-station-card">
      <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {description && <p className="radio-description">{description}</p>}
        <div className="radio-player">
          <IonButton
            fill="solid"
            color="primary"
            onClick={togglePlay}
            disabled={isCurrentStation && isLoading}
            className="play-button"
          >
            <IonIcon icon={isCurrentlyPlaying ? pause : play} slot="start" />
            {isCurrentStation && isLoading ? 'Loading...' : isCurrentlyPlaying ? 'Pause' : 'Play'}
          </IonButton>
          {isCurrentlyPlaying && (
            <IonIcon icon={volumeHigh} className="playing-indicator" />
          )}
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default RadioStation;

