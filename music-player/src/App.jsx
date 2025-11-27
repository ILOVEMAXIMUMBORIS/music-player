import { useState, useRef, useEffect } from 'react';
import './App.css';
import eblan from './assets/m1000x1000.svg';
import playbtn from './assets/playbtn.png';
import sampleSong from './assets/sample.mp3';

function App() {
  const songs = [
    { title: 'Язык для славян', artist: 'Научно-технический рэп', cover: eblan, src: sampleSong },
    { title: 'Язык для славян 2', artist: 'Научно-технический рэп', cover: eblan, src: sampleSong },
    { title: 'Язык для славян 3', artist: 'Научно-технический рэп', cover: eblan, src: sampleSong },
    { title: 'Язык для славян 4', artist: 'Научно-технический рэп', cover: eblan, src: sampleSong },
    { title: 'Язык для славян 5', artist: 'Научно-технический рэп', cover: eblan, src: sampleSong },
    { title: 'Язык для славян 6', artist: 'Научно-технический рэп', cover: eblan, src: sampleSong },
    { title: 'Язык для славян 7', artist: 'Научно-технический рэп', cover: eblan, src: sampleSong },
    { title: 'Язык для славян 8', artist: 'Научно-технический рэп', cover: eblan, src: sampleSong },
    { title: 'Язык для славян 9', artist: 'Научно-технический рэп', cover: eblan, src: sampleSong },
  ];

  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 0);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const formatTime = (time) => {
    if (!time) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <div className='Search-bg'>
        <p className='Search'>Ищите тысячи песен, артистов, альбомов и т.д.</p>
      </div>

      <div className="decoration-left" />
      <div className="decoration-right" />

      <div className="cards">
        {songs.map((song, index) => (
          <div className="card" key={index} onClick={() => playSong(song)}>
            <img src={song.cover} className="Card-Image" />
            <div className="card-text">
              <p>{song.title}</p>
              <p>{song.artist}</p>
            </div>
            <img src={playbtn} className="playbtn" />
          </div>
        ))}
      </div>

      <div className="player">
        <img src={currentSong.cover} className="Card-Image" />

        <div className="player-info">
          <p>{currentSong.title}</p>
          <p>{currentSong.artist}</p>

          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          />

          <div className="time">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <button onClick={togglePlay}>
          {isPlaying ? '⏸' : '▶'}
        </button>

        <audio
          ref={audioRef}
          src={currentSong.src}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />
      </div>
    </>
  );
}

export default App;
