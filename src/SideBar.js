import React from 'react'
import SideBarCSS from './assets/css/style.css'
import HomeIcon from '@material-ui/icons/Home'
import TimelineIcon from '@material-ui/icons/Timeline'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import DescriptionIcon from '@material-ui/icons/Description'


function SideBar() {
    const divStyle = {
        color: 'red',
    };
    return (
        <div>
            <div id="sidebarMenu" className="sidebar sidebar-fixed sidebar-components ps ps--active-y">
                <div className="sidebar-body">
                    <ul className="sidebar-nav">
                        <li className="nav-item">
                            <a href="components/index.html" className="nav-link active">
                                <HomeIcon fontSize="large" className="sidebar__icon"  style={divStyle} />
                                Dashboard</a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="components/index.html" className="nav-link">
                               <TimelineIcon fontSize="large" className="sidebar__icon"/>
                                Sales</a>
                        </li>
                        <li className="nav-item">
                            <a href="components/index.html" className="nav-link">
                               <LocalAtmIcon fontSize="large" className="sidebar__icon"/>
                                Investments</a>
                        </li>
                        <li className="nav-item">
                            <a href="components/index.html" className="nav-link">
                                <DescriptionIcon/>
                                Reports</a>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default SideBar
