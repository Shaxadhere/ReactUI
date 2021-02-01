import React from 'react'
import DashforgeCSS from './assets/css/dashforge.css'
import DashforgeDashboardCSS from './assets/css/dashforge.dashboard.css'

function Header() {
    return (
        <div>
            <header className="navbar navbar-header navbar-header-fixed">
            <a href="dashboard-one.html" id="mainMenuOpen" className="burger-menu">
                <i data-feather="menu"></i>
            </a>
            <div className="navbar-brand">
                <a href="../../index.html" className="df-logo">PointOf<span>Sale</span>
                </a>
            </div>
            <div id="navbarMenu" className="navbar-menu-wrapper">
                <div className="navbar-menu-header">
                    <a href="../../index.html" className="df-logo">PointOf<span>Sale</span>
                    </a>
                    <a id="mainMenuClose" href="dashboard-one.html">
                        <i data-feather="x"></i>
                    </a>
                </div>
            </div>
            <div class="navbar-right">
              <a href="login" class="btn btn-primary-outline">
                    <span>Login</span>
                </a>
            </div>
        </header>

        </div>
    )
}

export default Header
