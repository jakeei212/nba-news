import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import  './sideNav.css'

const SideNavItems = () => {

    const items = [
        {
            type: "option",
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: "option",
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type: "option",
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: "option",
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: "option",
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out'
        }
    ]

    const showItems = () => {
        return items.map( (item,i) =>{
            return (
                <div key={i} className="option">
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </Link>
                </div>
            )
        } )
    }


    return(
           <div>
               {showItems()}
           </div> 
    )
}

export default SideNavItems;