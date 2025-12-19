import { IonButton, IonIcon, IonLabel } from '@ionic/react';
import { play, pause, volumeHigh } from 'ionicons/icons';
import { useRadioPlayer } from '../contexts/RadioPlayerContext';
import './MiniPlayer.css';

const MiniPlayer: React.FC = () => {
  const { currentStation, isPlaying, isLoading, playStation, pauseStation } = useRadioPlayer();

  if (!currentStation) {
    return null;
  }

  const togglePlay = () => {
    if (isPlaying) {
      pauseStation();
    } else {
      playStation(currentStation);
    }
  };

  return (
    <div className="mini-player">
      <div className="mini-player-info">
        {currentStation.favicon ? (
          <img 
            src={currentStation.favicon} 
            alt={currentStation.name}
            style={{ width: '32px', height: '32px', borderRadius: '6px', objectFit: 'cover', marginRight: '8px' }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <IonIcon icon={volumeHigh} className="mini-player-icon" />
        )}
        <IonLabel className="mini-player-name">{currentStation.name}</IonLabel>
      </div>
      <IonButton
        fill="clear"
        color="primary"
        onClick={togglePlay}
        disabled={isLoading}
        className="mini-player-button"
      >
        <IonIcon icon={isPlaying ? pause : play} />
      </IonButton>
    </div>
  );
};

export default MiniPlayer;

