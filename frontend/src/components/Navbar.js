import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import { Button } from './Button';
import "./Navbar.css";
import Home from './pages/home'

const Navbar = () => {
	const [click, setClick] = useState(false); 
	const [button, setButton]  = useState(true);

	const closeMobileMenu = ()=> {
		setClick(false);
	}
	const handleClick = ()=> {
		setClick(!click);
	}
	const showButton = ()=> {
		if(window.innerWidth<=960){
			setButton(false);
		}
		else{
			setButton(true);
		}
	}
	window.addEventListener('resize', showButton);
    return (
        <div>
            <nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo"  >
						Home
					</Link>
					<div className="menu-icon" onClick = {handleClick}>
						  {click ? <ImCross className="icon"  /> :  <MdMenu  className="icon"/>  } 
						 
					</div>
					<ul className={click ? 'nav-menu active': 'nav-menu'}>
						<li className="nav-item">
							<Link 
								to="/" 
								className="nav-links" 
								onClick={closeMobileMenu} >
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/services" className="nav-links" onClick={closeMobileMenu}>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/products" className="nav-links" onClick={closeMobileMenu}>
								Products
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
								Signup
							</Link>
						</li>
					</ul>
					{ button && <Button buttonStyle='btn--outline'>Signup</Button> }
				</div>	
			</nav>
        </div>	
		
    );
}

export default Navbar;
