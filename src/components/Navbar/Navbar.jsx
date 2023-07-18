import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
	const [show, setShow] = useState(false);
	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);

		return () => {
			window.removeEventListener("scroll", transitionNavBar);
		};
	}, []);

	return (
		<div className={`navbar ${show && "navbar__black"}`}>
			<div className="nav__content">
				<img
					className="nav__logo"
					src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
					alt=""
				/>

				<img
					className="nav__avatar"
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Navbar;
