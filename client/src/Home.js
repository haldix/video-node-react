import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import useFetch from './useFetch';

const Home = () => {
  const [videos, error] = useFetch('/videos');

  return (
    <div className='App-header'>
      <Header />
      <div className='container'>
        <div className='row'>
          {error ? (
            <h2>{error}</h2>
          ) : (
            <>
              {videos.map((video) => (
                <div className='col-md-4' key={video.id}>
                  <Link to={`/player/${video.id}`}>
                    <div className='card border-0'>
                      <img
                        src={`http://localhost:4000${video.poster}`}
                        alt={video.name}
                      />
                      <div className='card-body'>
                        <p>{video.name}</p>
                        <p>{video.duration}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
