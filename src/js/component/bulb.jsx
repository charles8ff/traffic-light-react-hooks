import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Bulb = props => {
	const [color, setColor] = useState("dark");
	// const [light, setLight] = useState(false);
	useEffect(
		() => {
			console.log("eoo");
		},
		[props.allBulbs]
	);
	return (
		<div
			onClick={() => {
				props.onMyClick(props.color);
				//console.log(props.color);
			}}
			className={
				props.allBulbs[props.color]
					? "bulb bg-" + props.color
					: "bulb bg-dark"
			}
		/>
	);
};
Bulb.propTypes = {
	color: PropTypes.string,
	allBulbs: PropTypes.any,
	onMyClick: PropTypes.any
};
