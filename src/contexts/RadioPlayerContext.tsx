import { createContext, useContext, useState, useRef, ReactNode } from 'react';

interface RadioStation {
  name: string;
  streamUrl: string;
  description?: string;
}

interface RadioPlayerContextType {
  currentStation: RadioStation | null;
  isPlaying: boolean;
  isLoading: boolean;
  playStation: (station: RadioStation) => void;
  pauseStation: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const RadioPlayerContext = createContext<RadioPlayerContextType | undefined>(undefined);

export const RadioPlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStation, setCurrentStation] = useState<RadioStation | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playStation = async (station: RadioStation) => {
    const audio = audioRef.current;
    if (!audio) return;

    // If a different station is playing, stop it first
    if (currentStation && currentStation.streamUrl !== station.streamUrl) {
      audio.pause();
      audio.src = '';
      setIsPlaying(false);
      setIsLoading(false);
    }

    // Set new station
    setCurrentStation(station);
    audio.src = station.streamUrl;

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
  };

  const pauseStation = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      setIsPlaying(false);
      setIsLoading(false);
    }
  };

  return (
    <RadioPlayerContext.Provider
      value={{
        currentStation,
        isPlaying,
        isLoading,
        playStation,
        pauseStation,
        audioRef,
      }}
    >
      {children}
      <audio
        ref={audioRef}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPlaying={() => {
          setIsPlaying(true);
          setIsLoading(false);
        }}
        onPause={() => setIsPlaying(false)}
        onWaiting={() => setIsLoading(true)}
        onCanPlayThrough={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setIsPlaying(false);
          console.error('Error loading radio stream');
        }}
      />
    </RadioPlayerContext.Provider>
  );
};

export const useRadioPlayer = () => {
  const context = useContext(RadioPlayerContext);
  if (context === undefined) {
    throw new Error('useRadioPlayer must be used within a RadioPlayerProvider');
  }
  return context;
};

