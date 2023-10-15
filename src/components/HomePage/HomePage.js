import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <div className='title'>Kunst</div>
            <div className='home-intro intro'>Welcome to Kunst! Explore the fusion of music and art by selecting a beautiful song.
                Let music and art intertwine to craft your personalized audio-visual masterpiece. </div>
            <div className='right-button'><Link to="/select"><button>Get started</button></Link></div>
        </div>
    );
};

export default HomePage;