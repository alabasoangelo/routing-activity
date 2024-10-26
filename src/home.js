import React from 'react';
import Content from './HomeCont.js';
import About from './AboutUs.js';
import Contact from './Contact.js';
import {Route, Routes, NavLink, Navigate } from 'react-router-dom';
import './style.css';

export default function Home() { 
    return (
        <>
            <h1 className='website-title'>Website</h1>
            <ul className="navbar">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about-us" className={({ isActive }) => isActive ? 'active' : ''}>
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact-us" className={({ isActive }) => isActive ? 'active' : ''}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}