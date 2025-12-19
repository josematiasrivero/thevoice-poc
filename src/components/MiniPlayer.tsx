import { IonButton, IonIcon, IonLabel } from '@ionic/react';
import { play, pause, volumeHigh } from 'ionicons/icons';
import { useRadioPlayer } from '../contexts/RadioPlayerContext';
import { useEffect, useState } from 'react';
import './MiniPlayer.css';

const MiniPlayer: React.FC = () => {
  const { currentStation, isPlaying, isLoading, playStation, pauseStation } = useRadioPlayer();
  const [isIOSPWA, setIsIOSPWA] = useState(false);

  useEffect(() => {
    // Check if running on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    // Check if running as PWA (standalone mode)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                        (window.navigator as any).standalone === true;
    
    setIsIOSPWA(isIOS && isStandalone);
  }, []);

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
    <div className={`mini-player ${isIOSPWA ? 'ios-pwa' : ''}`}>
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

