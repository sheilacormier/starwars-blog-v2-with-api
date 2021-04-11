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
			{typeof starships !== "undefined" && (
				<div className="row row mb-5 attributespadding">
					<div className="col text-center">
						<span className="attributesheader">MODEL</span>
						<p className="attributesdetails">{starships.model}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">STARSHIP CLASS</span>
						<p className="attributesdetails">{starships.starship_class}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">LENGHT</span>
						<p className="attributesdetails">{starships.length}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">CREW</span>
						<p className="attributesdetails">{starships.crew}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">PASSENGERS</span>
						<p className="attributesdetails">{starships.passengers}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">MGLT</span>
						<p className="attributesdetails">{starships.MGLT}</p>
					</div>
				</div>
			)}
		</div>
	);
};

StarshipStats.propTypes = {
	data: PropTypes.object.isRequired
};
