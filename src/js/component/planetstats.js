import React, { useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const PlanetStats = props => {
	const [planets, setPlanets] = useState(undefined);
	useEffect(() => {
		fetch(`https://www.swapi.tech/api/planets/${props.data.uid}`)
			.then(res => res.json())
			.then(data => setPlanets(data.result.properties));
	}, [props.data]);

	return (
		<div className="container mt-5 mb-5">
			<div className="row mb-3 mt-4">
				<div className="col text-center detailsheader">DIAMETER</div>
				<div className="col text-center detailsheader">ROTATION PERIOD</div>
				<div className="col text-center detailsheader">GRAVITY</div>
				<div className="col text-center detailsheader">POPULATION</div>
				<div className="col text-center detailsheader">CLIMATE</div>
				<div className="col text-center detailsheader">TERRAIN</div>
			</div>
			{typeof planets !== "undefined" && (
				<div className="row row mb-5 detailspadding">
					<div className="col text-center detailsattributes">{planets.diameter}</div>
					<div className="col text-center detailsattributes">{planets.rotation_period}</div>
					<div className="col text-center detailsattributes">{planets.gravity}</div>
					<div className="col text-center detailsattributes">{planets.population}</div>
					<div className="col text-center detailsattributes">{planets.climate}</div>
					<div className="col text-center detailsattributes">{planets.terrain}</div>
				</div>
			)}
		</div>
	);
};

PlanetStats.propTypes = {
	data: PropTypes.object.isRequired
};
