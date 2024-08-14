import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Work from "../page/Work";


function Approutes() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(false);
    };
    return (
        <div className='Router'>
            <Router>
                <h1>{isVisible && (<NavLink to="/home" onClick={handleClick} className="Click">Click Here to Visit Home Page</NavLink>)}</h1>
                <Routes >
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/work" element={<Work />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Approutes;
