import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonIcon } from '@ionic/react';
import { play, pause, volumeHigh } from 'ionicons/icons';
import { useRadioPlayer } from '../contexts/RadioPlayerContext';
import './RadioStation.css';

interface RadioStationProps {
  name: string;
  streamUrl: string;
  description?: string;
  favicon?: string;
  country?: string;
  tags?: string;
}

const RadioStation: React.FC<RadioStationProps> = ({ name, streamUrl, description, favicon, country, tags }) => {
  const { currentStation, isPlaying, isLoading, playStation, pauseStation } = useRadioPlayer();
  
  const isCurrentStation = currentStation?.streamUrl === streamUrl;
  const isCurrentlyPlaying = isCurrentStation && isPlaying;

  const togglePlay = () => {
    if (isCurrentlyPlaying) {
      pauseStation();
    } else {
      playStation({ name, streamUrl, description, favicon });
    }
  };

  // Format tags for display (split by comma and clean up)
  const formattedTags = tags ? tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [];

  return (
    <IonCard className="radio-station-card">
      <IonCardHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {favicon && (
            <img 
              src={favicon} 
              alt={name}
              style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'cover' }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          )}
          <IonCardTitle>{name}</IonCardTitle>
        </div>
      </IonCardHeader>
      <IonCardContent>
        {description && <p className="radio-description">{description}</p>}
        <div className="radio-info">
          {country && (
            <div className="info-item">
              <span className="info-label">Country:</span>
              <span className="info-value">{country}</span>
            </div>
          )}
          {formattedTags.length > 0 && (
            <div className="info-item">
              <span className="info-label">Categories:</span>
              <span className="info-value">{formattedTags.join(', ')}</span>
            </div>
          )}
        </div>
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

