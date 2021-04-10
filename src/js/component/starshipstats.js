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
				<div className="row row mb-5 detailspadding">
					<div className="col text-center">
						<span className="detailsheader">MODEL</span>
						<p className="detailsattributes">{starships.model}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">STARSHIP CLASS</span>
						<p className="detailsattributes">{starships.starship_class}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">LENGHT</span>
						<p className="detailsattributes">{starships.length}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">CREW</span>
						<p className="detailsattributes">{starships.crew}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">PASSENGERS</span>
						<p className="detailsattributes">{starships.passengers}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">MGLT</span>
						<p className="detailsattributes">{starships.MGLT}</p>
					</div>
				</div>
			)}
		</div>
	);
};

StarshipStats.propTypes = {
	data: PropTypes.object.isRequired
};
