import { useState, useRef, useEffect } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonIcon } from '@ionic/react';
import { play, pause, volumeHigh } from 'ionicons/icons';
import './RadioStation.css';

interface RadioStationProps {
  name: string;
  streamUrl: string;
  description?: string;
}

const RadioStation: React.FC<RadioStationProps> = ({ name, streamUrl, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };

    const handlePlaying = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
      setIsLoading(false);
    };

    const handleWaiting = () => {
      setIsLoading(true);
    };

    const handleCanPlayThrough = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setIsPlaying(false);
      console.error('Error loading radio stream');
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('canplaythrough', handleCanPlayThrough);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setIsLoading(false);
    } else {
      try {
        setIsLoading(true);
        await audio.play();
        setIsPlaying(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Error playing audio:', error);
        setIsLoading(false);
        setIsPlaying(false);
      }
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
          <audio ref={audioRef} src={streamUrl} preload="none" />
          <IonButton
            fill="solid"
            color="primary"
            onClick={togglePlay}
            disabled={isLoading}
            className="play-button"
          >
            <IonIcon icon={isPlaying ? pause : play} slot="start" />
            {isLoading ? 'Loading...' : isPlaying ? 'Pause' : 'Play'}
          </IonButton>
          {isPlaying && (
            <IonIcon icon={volumeHigh} className="playing-indicator" />
          )}
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default RadioStation;

