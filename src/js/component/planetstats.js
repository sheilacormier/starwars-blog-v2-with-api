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
			{typeof planets !== "undefined" && (
				<div className="row row mb-5 detailspadding">
					<div className="col text-center">
						<span className="detailsheader">DIAMETER</span>
						<p className="detailsattributes">{planets.diameter}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">ROTATION PERIOD</span>
						<p className="detailsattributes">{planets.rotation_period}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">GRAVITY</span>
						<p className="detailsattributes">{planets.gravity}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">POPULATION</span>
						<p className="detailsattributes">{planets.population}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">CLIMATE</span>
						<p className="detailsattributes">{planets.climate}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">TERRAIN</span>
						<p className="detailsattributes">{planets.terrain}</p>
					</div>
				</div>
			)}
		</div>
	);
};

PlanetStats.propTypes = {
	data: PropTypes.object.isRequired
};
