import React from 'react';
import '../articles.css';

const postData = (props) => (
    <div className="articlePostData">
        <div>
            Date:
            <span>{props.data.date}</span>
        </div>
        <div>
            Author:
            <span>{props.data.author}</span>
        </div>
    </div>
) 

export default postData;