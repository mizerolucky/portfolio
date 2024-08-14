import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoLogoCodepen } from "react-icons/io5";
import Workcard from '../components/Workcard';
import pic8 from "../assets/mov.jpeg";
import pic9 from "../assets/song.jpg";
import pic10 from "../assets/soc.jpg";
import pic11 from "../assets/shop.jpg";
import pic12 from "../assets/game.jpg";
import pic13 from "../assets/code.jpg";
import Smallcontact from "../components/Smallcontact"

export default function Work() {
    return (
        <div>
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
            <div className='card-paper'>
                <Workcard
                    image={pic8}
                    title={"Watch all your favourite movies at home"}
                />
                <Workcard
                    image={pic9}
                    title={"Watch all your favourite songs at home"}
                />
                <Workcard
                    image={pic10}
                    title={"Reach all your favourite social meadia platforms at home"}
                />
                <Workcard
                    image={pic11}
                    title={"Do shopping online at home"}
                />
                <Workcard
                    image={pic12}
                    title={"Reach all your favourite games at home"}
                />
                <Workcard
                    image={pic13}
                    title={"Learn web design at home"}
                />
            </div>
            <Smallcontact />
        </div>
    )
}
