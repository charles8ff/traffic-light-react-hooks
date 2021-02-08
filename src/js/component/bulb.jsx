import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Bulb = props => {
	return (
		<div
			onClick={() => {
				props.onMyClick();
			}}
			className={"bulb bg-" + props.color}
		/>
	);
};
Bulb.propTypes = {
	color: PropTypes.string,
	allBulbs: PropTypes.any,
	onMyClick: PropTypes.any
};
