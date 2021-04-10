import React, { useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const StarshipStats = props => {
	const [starships, setStarships] = useState(undefined);
	useEffect(() => {
		fetch(`https://www.swapi.tech/api/starships/${props.data.uid}`)
			.then(res => res.json())
			.then(data => setStarships(data.result.properties));
	}, [props.data]);

	return (
		<div className="container mt-5 mb-5">
			<div className="row mb-3 mt-4">
				<div className="col text-center detailsheader">MODEL</div>
				<div className="col text-center detailsheader">STARSHIP CLASS</div>
				<div className="col text-center detailsheader">LENGHT</div>
				<div className="col text-center detailsheader">CREW</div>
				<div className="col text-center detailsheader">PASSENGERS</div>
				<div className="col text-center detailsheader">MGLT</div>
			</div>
			{typeof starships !== "undefined" && (
				<div className="row row mb-5 detailspadding">
					<div className="col text-center detailsattributes">{starships.model}</div>
					<div className="col text-center detailsattributes">{starships.starship_class}</div>
					<div className="col text-center detailsattributes">{starships.length}</div>
					<div className="col text-center detailsattributes">{starships.crew}</div>
					<div className="col text-center detailsattributes">{starships.passengers}</div>
					<div className="col text-center detailsattributes">{starships.MGLT}</div>
				</div>
			)}
		</div>
	);
};

StarshipStats.propTypes = {
	data: PropTypes.object.isRequired
};
