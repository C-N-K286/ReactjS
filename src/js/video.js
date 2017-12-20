import React from 'react';
import '../scss/video.css';

export class Video extends React.Component
{
    render()
    {
        return(
            <video width="320" height="240" controls>
            <source src={require('../assets/k.mp4')} />
          Your browser does not support the video tag.
            </video>
        );
    }
}