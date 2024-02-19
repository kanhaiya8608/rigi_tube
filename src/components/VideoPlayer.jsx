import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import VideoPlaylist from './VideoPlaylist';
import { playlist } from './playlist';

const VideoPlayer = () => {
  const [currentVideo, setCurrentVideo] = useState(playlist[0]);

  const handleVideoChange = (newVideo) => {
    setCurrentVideo(newVideo);
  };

  return (
    <div className='container md:flex mx-auto px-4 m-8'>
      <div>
        <div className='video-wrapper'>
          <ReactPlayer
            className='react-player'
            url={currentVideo.url}
            playing={true}
            controls={true}
            width='100%'
            height='100%'
          />
        </div>

        <h2 className='text-3xl my-2'>{currentVideo.title}</h2>
        <p className='text-xl py-2'>{currentVideo.description}</p>
      </div>

      <div className='p-4 border border-2 rounded-md w-full md:mx-6 '>
        <h3 className='text-4xl py-2'>Playlist</h3>
        <VideoPlaylist playlist={playlist} onVideoChange={handleVideoChange} />
      </div>
    </div>
  );
};

export default VideoPlayer;
