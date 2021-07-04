import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from ".././components/SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	const [text, setText] = useState(false);
	const showText = () => setText(!text);

	return (
		<>
			<IconContext.Provider value={{ color: "#d5d5d5" }}>
				<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
					<ul className="nav-menu-items">
						<li className="navbar-toggle">
							<Link to="#" className="menu-bars">
								<AiIcons.AiOutlineMenu onClick={showSidebar} />
							</Link>
						</li>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										<div className="item-icon">{item.icon}</div>
										<span> {item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;
