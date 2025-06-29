import { ArrowLeft, Copy, LucideMenu, Menu, MenuIcon } from 'lucide-react'
import React from 'react'

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="drawer">
                    <input id="sidebar" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="sidebar" className="btn btn-ghost drawer-button"><Menu /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="sidebar" aria-label="close sidebar" className="drawer-overlay"><ArrowLeft /></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-fit p-4">
                            {/* Sidebar content here */}
                            <li><a><label htmlFor="sidebar" aria-label="close sidebar" className="drawer-overlay"><ArrowLeft /></label></a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-sm"><span className='badge badge-md badge-outline rounded-full'>0xDC24316b9AE...</span><span><Copy size={20} /></span></a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Navbar