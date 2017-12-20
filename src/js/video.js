import React from 'react';
import '../scss/video.css';

export class Video extends React.Component
{
    render()
    {
        return(
           /* <video width="600" height="600" controls>
            <source src={require('../assets/k.mp4')} />
          Your browser does not support the video tag.
            </video>*/
            <h1>{this.props.index}</h1>
        );
    }
}