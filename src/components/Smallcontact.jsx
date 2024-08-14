import React from 'react';
import pic6 from "../assets/img6.jpg";
import {NavLink} from "react-router-dom";
import { PiArrowDownLeft } from "react-icons/pi";
import { TfiArrowLeft } from "react-icons/tfi";

export default function Smallcontact() {
  return (
    <div className='Smallcontact'>
      <div className='Smallcontact-a'>
        <div className='Smallcontact-a-1'>
          <img src={pic6} alt="not found" />
          <h1> Let’s worktogether</h1>
        </div>
        <span>{<PiArrowDownLeft />}</span>
      </div>
      <div className='Smallcontact-b'>
        <div></div>
        <div><button className='Smallcontact-b-btn'><NavLink to="/contact">Get in touch</NavLink></button></div>
      </div>
      <div className='Smallcontact-c'>
        <button className='Smallcontact-c-btn'><NavLink to="/contact">+250 721651476</NavLink></button>
        <div>{<TfiArrowLeft />}  Call and learn more</div>
      </div>
      <div className='Smallcontact-d'>
        <div></div>
        <div className='Smallcontact-c-list'>
          <ul>
            <NavLink to="https://x.com/mizero_lucky5" target='_blank'>Twitter</NavLink>
            <NavLink to="https://web.facebook.com/profile.php?id=100083928845149" target='_blank'>Facebook</NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}
