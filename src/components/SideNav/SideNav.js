import react from 'react';
import './SideNav.styles.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const SideNav = () => {

    return (

        <div className='sidenav'>
            <span>
                <h1>About Me</h1>
            </span>
            <span>
                <h1>Projects</h1>
            </span>
            <span>
                <h1>Blog</h1>
            </span>
        </div>
    )
}

export default SideNav; 