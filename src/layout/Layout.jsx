import React from 'react'
import NavBar from '../components/NavBar'
import Profile from '../components/Profile'

export default function Layout({children}) {
    return (
        <div>
            <Profile />
            <NavBar />
            <div className="main" >
                {children}
            </div>
        </div>
    )
}
