import React, { Fragment, useState, useEffect } from "react";
import { Bulb } from "./bulb.jsx";
import PropTypes from "prop-types";

const UPPER_COLOR = "danger";
const MID_COLOR = "warning";
const LOWER_COLOR = "success";

export function Home() {
	//const [light, setLight] = useState(false);
	const [allBulbs, setallBulbs] = useState({
		danger: false,
		warning: false,
		success: false
	});
	function onUserClick(mybulb) {
		setallBulbs({
			[mybulb]: !allBulbs.mybulb
		});

		console.log(mybulb, allBulbs.mybulb);
	}

	return (
		<Fragment>
			<div className="container">
				<Bulb
					allBulbs={allBulbs}
					onMyClick={mybulb => onUserClick(mybulb)}
					color={UPPER_COLOR}
				/>
				<Bulb
					allBulbs={allBulbs}
					onMyClick={mybulb => onUserClick(mybulb)}
					color={MID_COLOR}
				/>
				<Bulb
					allBulbs={allBulbs}
					onMyClick={mybulb => onUserClick(mybulb)}
					color={LOWER_COLOR}
				/>
			</div>
			<div className="trafficLightPole" />
		</Fragment>
	);
}
