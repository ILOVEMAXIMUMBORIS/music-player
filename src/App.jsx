import { useState, useRef, useEffect } from 'react';
import './App.css';
import playbtn from './assets/playbtn.png';
import cover from './assets/m1000x1000.svg';
import cover2 from './assets/ETOSAPSANHAXU.png';
import cover3 from './assets/lastsummercover.png';
import cover4 from './assets/mynamelida.png';
import cover5 from './assets/phantacover.png';
import cover6 from './assets/skidkacover.png';
import cover7 from './assets/yazaebalsyanazvaniapridumivat.png';
import cover8 from './assets/seventeen.png';


import track1 from './assets/music/track1.mp3';
import track2 from './assets/music/track2.mp3';
import track3 from './assets/music/track3.mp3';
import track4 from './assets/music/track4.mp3';
import track5 from './assets/music/track5.mp3';
import track6 from './assets/music/track6.mp3';
import track7 from './assets/music/track7.mp3';
import track8 from './assets/music/track8.mp3';



function App() {
  const songs = [
  { title: 'Язык для славян', artist: 'Научно-технический рэп', cover: cover, src: track1 },
  { title: 'Скидка', artist: 'Тёмный принц', cover: cover6, src: track2 },
  { title: 'Phantasmagoria', artist: 'mzlff', cover: cover5, src: track3 },
  { title: 'Сапсан (Вангон 1)', artist: 'LIDA', cover: cover2, src: track4 },
  { title: 'Последнее лето', artist: 'LIDA, СЕКОНД ХЕНД', cover: cover3, src: track5 },
  { title: 'Пока тебе 17', artist: 'Nasty Babe feat. Solway', cover: cover8, src: track6 },
  { title: 'Ради бога', artist: 'Lida', cover: cover4, src: track7 },
  { title: 'Снежинка', artist: 'mzlff', cover: cover7, src: track8 },
  { title: 'Язык для славян 2', artist: 'Научно-технический рэп', cover: cover, src: track1 },
  { title: 'Язык для славян 3', artist: 'Научно-технический рэп', cover: cover, src: track1 },
  { title: 'Язык для славян 4', artist: 'Научно-технический рэп', cover: cover, src: track1 },
  { title: 'Язык для славян 5', artist: 'Научно-технический рэп', cover: cover, src: track1 },
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
