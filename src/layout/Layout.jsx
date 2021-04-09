import React from 'react'
import NavBar from '../components/NavBar'
import Profile from '../components/Profile'
import './layout.css'

export default function Layout({children}) {
    return (
        <div className="main">
            <Profile />
            <NavBar />
            <div>
                {children}
            </div>
        </div>
    )
}
