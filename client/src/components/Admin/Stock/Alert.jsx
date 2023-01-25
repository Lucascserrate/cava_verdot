import React from "react";
import "./Alert.css";

function Alert({ children }) {
	return (
		<div className="InfoBanner">
			<span className="reversed reversedRight">
				<span>&#9888;</span>
			</span>
			<span className="reversed reversedLeft">{children}</span>
		</div>
	);
}

export default Alert;
