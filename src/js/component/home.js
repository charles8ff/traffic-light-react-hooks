import React, { Fragment, useState, useEffect } from "react";
import { Bulb } from "./bulb.jsx";
import PropTypes from "prop-types";

const UPPER_COLOR = "danger";
const MID_COLOR = "warning";
const LOWER_COLOR = "success";

export function Home() {
	// const [light, setLight] = useState(false);
	const [redBulb, setRedBulb] = useState("dark");
	const [yellowBulb, setYellowBulb] = useState("dark");
	const [greenBulb, setGreenBulb] = useState("dark");

	const changeColorRed = () => {
		setRedBulb("danger");
		setYellowBulb("dark");
		setGreenBulb("dark");
	};

	const changeColorYellow = () => {
		setRedBulb("dark");
		setYellowBulb("warning");
		setGreenBulb("dark");
	};

	const changeColorGreen = () => {
		setRedBulb("dark");
		setYellowBulb("dark");
		setGreenBulb("success");
	};
	return (
		<Fragment>
			<div className="container">
				<Bulb onMyClick={() => changeColorRed()} color={redBulb} />
				<Bulb
					onMyClick={() => changeColorYellow()}
					color={yellowBulb}
				/>
				<Bulb
					onMyClick={mybulb => changeColorGreen()}
					color={greenBulb}
				/>
			</div>
			<div className="trafficLightPole" />
		</Fragment>
	);
}
