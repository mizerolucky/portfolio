import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoLogoCodepen } from "react-icons/io5";
import Smallcontact from '../components/Smallcontact';

export default function Contact() {
    return (
        <div className='contact-full'>
            <div className='welcomedetail'>
                <ul className='me'>
                    <li><NavLink to="/home">{<IoLogoCodepen />} Code by Lucky Gall</NavLink></li>
                </ul>
                <ul className='menu'>
                    <li><NavLink to="/about">About Gall</NavLink></li>
                    <li><NavLink to="/work">Work / Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <h1>I'm always open to discussing</h1>
            <div className='contact-full-part'>
                <div className='contact-full-'>
                    <form action="/submit-message" method="POST">
                        <div className='contact-full-part1'>
                            <p>Name</p>
                            <input type="text" placeholder="Enter your Name" />
                        </div>
                        <div className='contact-full-part2'>
                            <p>Email</p>
                            <input type="email" placeholder="Enter your Email" />
                        </div>
                        <div className='contact-full-part3'>
                            <label for="message">Write your message:</label><br></br>
                            <textarea id="message" name="message" rows="4" cols="50" placeholder="Enter your message here..."></textarea><br></br>
                            <input type="submit"></input>
                        </div>
                    </form>
                </div>
                <span className="Go-back-Home">
                    <button className='contact-full-part3-btn'></button>
                </span>

            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Smallcontact />
        </div>
    )
}
