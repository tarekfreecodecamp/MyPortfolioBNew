import React from 'react';
import { Link } from 'react-router-dom';
import football1 from '../src/assets/football1.jfif';
import avater from '../src/assets/avater.png';
export default function Layout() {
 return (
 <>
 < img src={avater}alt="avater" className="football" width="50px" height="50px"/>
 <h1><b>Tarek's Portfolio</b></h1>
 
 <nav>
    
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
 </nav>
<br/>
 <hr />
 
 </>
 
 );
}
