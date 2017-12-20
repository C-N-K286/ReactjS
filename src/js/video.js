import React from 'react';
import '../scss/video.css';

export class Video extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {videoList:
            []};
    }
    componentWillMount()
    {
       let list = [
        "https://www.youtube.com/embed/z3UHfi9vpbc",
        "https://www.youtube.com/embed/bgr57kA08bY",
        "https://www.youtube.com/embed/Ek17-Sh7jtA",
        "https://www.youtube.com/embed/JXIiQFSj8Yg",
        "https://www.youtube.com/embed/ebz20FHrT44",
        "https://www.youtube.com/embed/DS-raAyMxl4",
        "https://www.youtube.com/embed/FXiaIH49oAU"
       ]; 

       this.setState({videoList:list});
    }
    render()
    {
        return(
           /* <video width="600" height="600" controls>
            <source src={require('../assets/k.mp4')} />
          Your browser does not support the video tag.
            </video>*/
            <iframe width="800" height="400" src={this.state.videoList[this.props.index]} frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        );
    }
}