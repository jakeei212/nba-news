import React from 'react';
import  './footer.css';
import { Link } from 'react-router-dom';

import { CURRENT_YEAR } from '../../config';


const footer = () => (
        <div className="footer">
            <Link to="/" className="styles.logo">
                <img alt="nba logo" src="/images/nba_logo.png"/>
            </Link>
            <div className="styles.right">
                @NBA {CURRENT_YEAR} All rights reserved.
            </div>
        </div>
)


export default footer;