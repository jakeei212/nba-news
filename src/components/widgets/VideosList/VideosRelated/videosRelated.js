import React from 'react';
import  '../videosList.css';

import VideoListTemplate from '../videosListTemplate';

const videosRelated = (props) => (
    <div className="relatedWrapper">
        <VideoListTemplate
            data={props.data}
            teams={props.teams}
        />
    </div>
)

export default videosRelated;