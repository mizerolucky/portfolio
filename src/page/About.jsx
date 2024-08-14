import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoLogoCodepen } from "react-icons/io5";
import { TbArrowDownRight } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
import pic7 from "../assets/img7.jpg";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Card from '../components/Card';
import Smallcontact from '../components/Smallcontact';
export default function About() {
    return (
        <div className='whole-about'>
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
            <div className='About'>
                <h1>Helping brands thrive <br />in the digital world</h1>
                <div className='Smallcontact-b'>
                    <div></div>
                    <div><button className='Smallcontact-b-btn-copy'>{<GiWorld />}</button></div>
                </div>
                <div className='About-2'>
                    <span>{<TbArrowDownRight />}</span>
                    <div className='About-2-cont'>
                        <h3>I help peaple from all over the<br /> world with tailor-made solutions.<br /> With each project, I push my work<br /> to new horizons, always putting<br /> quality first.</h3>
                        <p>Always exploring...</p>
                    </div>
                    <div className='About-2-cont-img'>
                        <img src={pic7} alt="not found" />
                    </div>
                </div>
                <div className='About-3'>
                    <h1>I can help you with ...</h1>
                    <div className='About-3-card-per'>
                        <Card
                            title1={"01"}
                            title2={"Design"}
                            description={"With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)"}
                        />
                        <Card
                            title1={"02"}
                            title2={"Development"}
                            description={"I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. Build with Kirby CMS or Webflow."}
                        />
                        <Card
                            title1={"03"}
                            title2={"The full package"}
                            description={"A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects."}
                        />
                    </div>
                </div>
                <div className='About-4'>
                    <div className='location'>
                        <h3><FaMapLocationDot />  Location</h3>
                        <h3>Kigali city</h3>
                        <h3>Rwanda</h3>
                    </div>
                    <div className='birth'>
                        <h3><FaCalendarAlt />BirthDate</h3>
                        <h3>oct 06 2005</h3>
                    </div>
                </div>
                <Smallcontact />
            </div>
        </div>
    )
}
