import React from 'react'
import logo from './image/crm.jpg'
import './defaultLayout.css'
import { Link } from 'react-router-dom'

function Header() {
    return (

        <div className='layout-header'>
            <div className='image'>
                <img src={logo} />
            </div>
            <div>
                <Link to="/dashboard">
                    <button style={{border:"none"}}>
                     Dashboard
                    </button>
                </Link>
            </div>
            <div>
            <Link to="/TicketLanding">
                    <button style={{border:"none"}}>
                     Tickets
                    </button>
                </Link>
            </div>
            <div className='logout'>
            <Link to="/">
                    <button style={{border:"none"}}>
                     Logout
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Header
