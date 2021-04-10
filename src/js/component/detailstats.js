import React, { useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const DetailStats = props => {
	const [person, setPerson] = useState(undefined);
	useEffect(() => {
		fetch(`https://www.swapi.tech/api/people/${props.data.uid}`)
			.then(res => res.json())
			.then(data => setPerson(data.result.properties));
	}, [props.data]);

	return (
		<div className="container mt-5 mb-5">
			<div className="row mb-3 mt-4">
				<div className="col text-center detailsheader">BIRTH YEAR</div>
				<div className="col text-center detailsheader">GENDER</div>
				<div className="col text-center detailsheader">HEIGHT</div>
				<div className="col text-center detailsheader">MASS</div>
				<div className="col text-center detailsheader">SKIN COLOR</div>
				<div className="col text-center detailsheader">EYE COLOR</div>
			</div>
			{typeof person !== "undefined" && (
				<div className="row row mb-5 detailspadding">
					<div className="col text-center detailsattributes">{person.birth_year}</div>
					<div className="col text-center detailsattributes">{person.gender}</div>
					<div className="col text-center detailsattributes">{person.height}</div>
					<div className="col text-center detailsattributes">{person.mass}</div>
					<div className="col text-center detailsattributes">{person.skin_color}</div>
					<div className="col text-center detailsattributes">{person.eye_color}</div>
				</div>
			)}
		</div>
	);
};

DetailStats.propTypes = {
	data: PropTypes.object.isRequired
};
