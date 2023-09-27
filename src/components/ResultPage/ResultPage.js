import React from 'react';
import { useParams } from 'react-router-dom';
import sadResult from '../../assests/sad-result.jpg'
import excitingResult from '../../assests/exciting-result.jpg'
import happyResult from '../../assests/happy-result.jpg'
import peacefulResult from '../../assests/peaceful-result.jpg'

const ResultPage = () => {
  const { buttonId } = useParams();


  let imageUrl = '';

  switch (buttonId) {
    case 'sad':
      imageUrl = sadResult;
      break;
    case 'exciting':
      imageUrl = excitingResult;
      break;
    case 'happy':
      imageUrl = happyResult;
      break;
    case 'peaceful':
      imageUrl = peacefulResult;
      break;
    default:
      imageUrl = sadResult;
  }

  return (
    <div>
      <div className="intro">Voila! Here's your music-inspired masterpiece.</div>
      <div className='result-display'><img src={imageUrl} alt={`for Button ${buttonId}`} /></div>
    </div>
  );
};

export default ResultPage;
