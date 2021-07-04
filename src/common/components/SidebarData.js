import React from "react";
// import * as AiIcons from "react-icons/ai";
import home from "../../images/imgHome.png";
import dashboard from "../../images/imgDashboard.png";
import spam from "../../images/imgSpam.png";
import setting from "../../images/imgSettings.png";

export const SidebarData = [
	{
		title: "Home",
		path: "/",
		// eslint-disable-next-line jsx-a11y/alt-text
		icon: <img src={home} />,
		cName: "nav-text",
	},
	{
		title: "Dashboard",
		path: "/dashboard",
		// eslint-disable-next-line jsx-a11y/alt-text
		icon: <img src={dashboard} />,
		cName: "nav-text",
	},
	{
		title: "Spam",
		path: "/spam",
		// eslint-disable-next-line jsx-a11y/alt-text
		icon: <img src={spam} />,
		cName: "nav-text",
	},
	{
		title: "Setting",
		path: "/setting",
		// eslint-disable-next-line jsx-a11y/alt-text
		icon: <img src={setting} />,
		cName: "nav-text",
	},
];
