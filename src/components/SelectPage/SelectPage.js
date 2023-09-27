import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import blueAlbum from '../../assests/blue-album.png'
import greenAlbum from '../../assests/green-album.png'
import redAlbum from '../../assests/red-album.png'
import yellowAlbum from '../../assests/yellow-album.png'
import pauseIcon from '../../assests/pause.png'
import playIcon from '../../assests/play.png'
import excitingMusic from '../../assests/exciting.m4a'
import happyMusic from '../../assests/happy.m4a'
import peacefulMusic from '../../assests/peaceful.m4a'
import sadMusic from '../../assests/sad.m4a'


const SelectPage = () => {
    const audioRef = useRef(null);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState({});

    const playPauseTrack = (track) => {
        if (currentTrack === track && audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play();
                setIsPlaying({ ...isPlaying, [track]: true });
            } else {
                audioRef.current.pause();
                setIsPlaying({ ...isPlaying, [track]: false });
            }
        } else {
            if (audioRef.current) {
                audioRef.current.src = track;
                audioRef.current.play();
                setCurrentTrack(track);
                setIsPlaying({ [track]: true });
            }
        }
    };
    
    return (
        <div>
            <audio ref={audioRef} controls style={{ display: 'none' }}>
                <source src="" type="audio/mp4" />
            </audio>
            <div className="intro">Select a song to begin!</div>
            <div className="album-section">
                <div className="section-up">
                    <img src={blueAlbum} alt="img for blue album" className="album"></img>
                    <div className="song">Lullaby No.3 in E Minor</div>
                    <div className="singer">Ran Raiten</div>
                    <div className="play-section">
                        <button onClick={() => playPauseTrack(sadMusic)} className='play-left'>
                            {currentTrack === sadMusic && isPlaying[sadMusic] ? (
                                <img src={playIcon} alt="Play" className='play' />
                            ) : (
                                <img src={pauseIcon} alt="Pause" className='play' />
                            )}
                        </button>
                        <div className="select-button">
                            <Link to="/result/sad"><button id='sad'>Select</button></Link>
                        </div>
                    </div>
                </div>
                <div className="section-up">
                    <img src={greenAlbum} alt="img for green album" className="album"></img>
                    <div className="song">Get That Feeling</div>
                    <div className="singer">Ikoliks</div>
                    <div className="play-section">
                        <button onClick={() => playPauseTrack(excitingMusic)} className='play-left'>
                            {currentTrack === excitingMusic && isPlaying[excitingMusic] ? (
                                <img src={playIcon} alt="Play" className='play' />
                            ) : (
                                <img src={pauseIcon} alt="Pause" className='play' />
                            )}
                        </button>
                        <div className="select-button">
                            <Link to="/result/exciting"><button id='exciting'>Select</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="album-section">
                <div className="section-down">
                    <img src={yellowAlbum} alt="img for yellow album" className="album album-yellow"></img>
                    <div className="song">Happy to Be Happy</div>
                    <div className="singer">Danpun</div>
                    <div className="play-section">
                        <button onClick={() => playPauseTrack(happyMusic)} className='play-left'>
                            {currentTrack === happyMusic && isPlaying[happyMusic] ? (
                                <img src={playIcon} alt="Play" className='play' />
                            ) : (
                                <img src={pauseIcon} alt="Pause" className='play' />
                            )}
                        </button>
                        <div className="select-button">
                            <Link to="/result/happy"><button id='happy'>Select</button></Link>
                        </div>
                    </div>
                </div>
                <div className="section-down">
                    <img src={redAlbum} alt="img for red album" className="album album-red"></img>
                    <div className="song">Ocean Hued</div>
                    <div className="singer">Wav Two</div>
                    <div className="play-section">
                        <button onClick={() => playPauseTrack(peacefulMusic)} className='play-left'>
                            {currentTrack === peacefulMusic && isPlaying[peacefulMusic] ? (
                                <img src={playIcon} alt="Play" className='play' />
                            ) : (
                                <img src={pauseIcon} alt="Pause" className='play' />
                            )}
                        </button>
                        <div className="select-button">
                            <Link to="/result/peaceful"><button id='peaceful'>Select</button></Link>
                        </div>
                    </div>
                </div>

            </div>
            <div></div>
        </div>
    );
};

export default SelectPage;