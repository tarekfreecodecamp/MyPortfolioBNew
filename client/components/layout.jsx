import React from 'react';
import { Link } from 'react-router-dom';
import football1 from '../src/assets/football1.jfif';
import avater from '../src/assets/avater.png';

import '../components/layout.css'

export default function Layout() {
 return (
 <>
 < img src={avater}alt="avater" className="football" width="50px" height="50px"/>
 <h1><b>Tarek's Portfolio</b></h1>
 
 <p>Move mouse over to link to see the color change</p>
 <nav className = "navbar">
 <Link to="/" className='navbar'>Home</Link> | <Link to="/about" className='navbar' >About</Link> | <Link to="/education"  className='navbar'>Education</Link>| <Link to="/project"  className='navbar'>Project</Link>| <Link to="/contact"  className='navbar'>Contact</Link>
 </nav>
<br/>
 <hr />
 
 </>
 
 );
}
