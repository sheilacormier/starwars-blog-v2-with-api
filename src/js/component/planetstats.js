import React, { useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const PlanetStats = props => {
	const [planets, setPlanets] = useState(props.data);
	// useEffect(() => {
	// 	fetch(`https://www.swapi.tech/api/planets/${props.data.uid}`)
	// 		.then(res => res.json())
	// 		.then(data => setPlanets(data.result.properties));
	// }, [props.data]);

	return (
		<div className="container mt-5 mb-5">
			{typeof planets !== "undefined" && (
				<div className="row row mb-5 attributespadding">
					<div className="col text-center">
						<span className="attributesheader">DIAMETER</span>
						<p className="attributesdetails">{planets.diameter}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">ROTATION PERIOD</span>
						<p className="attributesdetails">{planets.rotation_period}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">GRAVITY</span>
						<p className="attributesdetails">{planets.gravity}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">POPULATION</span>
						<p className="attributesdetails">{planets.population}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">CLIMATE</span>
						<p className="attributesdetails">{planets.climate}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">TERRAIN</span>
						<p className="attributesdetails">{planets.terrain}</p>
					</div>
				</div>
			)}
		</div>
	);
};

PlanetStats.propTypes = {
	data: PropTypes.object.isRequired
};
