import React from 'react';
//, { useRef, useState }
import pic6 from "../assets/img6.jpg";
import { IoLogoCodepen } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { ImSphere } from "react-icons/im";
import Workcard from '../components/Workcard';
import pic8 from "../assets/mov.jpeg";
import pic9 from "../assets/song.jpg";
import pic10 from "../assets/soc.jpg";




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';




const Welcome = () => {
    return (
        <div className='welcome'>
            <div className="welcomeimg">
                <img src={pic6} alt="welcomeimg" />
            </div>
            <div className='content'>
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
                <div className='on-img'>
                    <div className='on-img-1'>
                        <div className='location'>
                            <p>Located in Kigali-Rwanda </p>
                            <span>{<ImSphere />}</span>
                        </div>
                        <h1>Designer & Developer</h1>
                    </div>
                    <h2><marquee behavior="" direction="left">- Mizero Lucky Gall -</marquee></h2>
                </div>
            </div>
            <div className='quotes-container'>
                <div className='quotes'>
                    <h2>Helping brands to stand out in the digitalera.Together we will set the new status quo.No nonsense,always on the cutting edge.</h2>
                    <div className='about-stanard'>
                        <p>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</p>
                        <button className='about-btn'><NavLink to="/about">About me</NavLink></button>
                    </div>
                </div>
            </div>
            <h1>Some works</h1>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <Workcard
                            image={pic8}
                            title={"Watch all your favourite movies at home"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Workcard
                            image={pic9}
                            title={"Watch all your favourite songs at home"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Workcard
                            image={pic10}
                            title={"Reach all your favourite social meadia platforms at home"}
                        />
                    </SwiperSlide>
                </Swiper>
            </>

            <div></div>

        </div>
    );
};

export default Welcome;
