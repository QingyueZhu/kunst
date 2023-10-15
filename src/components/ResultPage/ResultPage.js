import React from 'react';
import { useParams } from 'react-router-dom';

// Import your images
import sadImage1 from '../../assests/sad-result.jpg';
import sadImage2 from '../../assests/sad-result-2.jpg';
import excitingImage1 from '../../assests/exciting-result.jpg';
import excitingImage2 from '../../assests/exciting-result-2.jpg';
import happyImage1 from '../../assests/happy-result.jpg';
import happyImage2 from '../../assests/happy-result-2.jpg';
import peacefulImage1 from '../../assests/peaceful-result.jpg';
import peacefulImage2 from '../../assests/peaceful-result-2.jpg';

const imagesByRoute = {
  sad: [sadImage1, sadImage2],
  exciting: [excitingImage1, excitingImage2],
  happy: [happyImage1, happyImage2],
  peaceful: [peacefulImage1, peacefulImage2],
};

const ResultPage = () => {
  const { buttonId } = useParams();

  const images = imagesByRoute[buttonId];

  if (!images) {
    return <div>Error: Route not found.</div>;
  }

  // 随机选择一张图片
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];

  return (
    <div>
      <div className="intro">Voila! Here's your music-inspired masterpiece.</div>
      <div className='result-display'><img src={selectedImage} alt={`for Button ${buttonId}`} /></div>
    </div>
  );
};

export default ResultPage;
