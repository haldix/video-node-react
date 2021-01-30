import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import useFetch from './useFetch';

const Player = () => {
  const { id: videoId } = useParams();
  const [videoData, error] = useFetch(`/video/${videoId}/data`);

  return (
    <div className='App-header'>
      <Header />
      {error ? (
        <h2>error</h2>
      ) : (
        <div className='cont'>
          <video controls muted autoPlay crossOrigin='anonymous'>
            <source src={`/video/${videoId}`} type='video/mp4'></source>
            <track
              label='English'
              kind='captions'
              srcLang='en'
              src={`/video/${videoId}/caption`}
              default
            ></track>
          </video>
          <h1>{videoData.name}</h1>
          <Link to='/' className='home-btn'>
            Home
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Player;
