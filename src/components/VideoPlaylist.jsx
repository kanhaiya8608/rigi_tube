import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { BsList } from "react-icons/bs";

const VideoPlaylist = ({ playlist, onVideoChange }) => {
  return (
    <Droppable droppableId="playlist">
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef} className=''>
          {playlist.map((video, index) => (
            <Draggable key={index} draggableId={index.toString()} index={index}>
              {(provided) => (
                <li className='flex items-center bg-gray-800 text-white rounded-md p-2 m-2'
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <BsList color='white' size={20} className=' m-2'/><button onClick={() => onVideoChange(video)}>{video.title}
                  </button>
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default VideoPlaylist;
