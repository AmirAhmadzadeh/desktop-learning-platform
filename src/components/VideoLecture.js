


import React, { Component } from 'react'
import WithClass from './WIthClass';


const VIDEO_PATH = '/home/amir/work-space/InProgress/Learning-DesktopApp/videos';

class VideoLecture extends Component {
    render() {
        return (
            <WithClass classes='lecture'>
                <video
                    controls
                    className="video"
                    height="70%"
                    width="100%"
                    controlsList="nodownload"
                >
                    <source src={`/001-how-to-get-help.mp4`}
                        type="video/ogg" />

                    <source src={`/001-how-to-get-help.mp4`}

                        type="video/ogg" />


                </video>

            </WithClass>
        )
    }
}



export default VideoLecture;  