import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark'>
			<span></span>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarTogglerDemo02'
				aria-controls='navbarTogglerDemo02'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div
				className='collapse navbar-collapse text-right'
				id='navbarTogglerDemo02'
			>
				<ul className='navbar-nav mx-auto mt-2 mt-lg-0'>
					<li className='nav-item'>
						<Link
							to='/'
							className={
								window.location.pathname === '/'
									? 'nav-link active'
									: 'nav-link'
							}
						>
							HOME
						</Link>
						{console.log(window.location.pathname)}
					</li>
					<li className='nav-item'>
						<Link
							to='/aboutme'
							className={
								window.location.pathname === '/aboutme'
									? 'nav-link active'
									: 'nav-link'
							}
						>
							ABOUT ME
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							to='/portfolio'
							className={
								window.location.pathname === '/portfolio'
									? 'nav-link active'
									: 'nav-link'
							}
						>
							PORTFOLIO
						</Link>
					</li>
					<li className='nav-item'>
						<Link
							to='/resume'
							className={
								window.location.pathname === '/resume'
									? 'nav-link active'
									: 'nav-link'
							}
						>
							RESUME
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;