import React, { useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const PeopleStats = props => {
	const [person, setPerson] = useState(props.data);

	return (
		<div className="container mt-5 mb-5">
			{typeof person !== "undefined" && (
				<div className="row row mb-5 attributespadding">
					<div className="col text-center">
						<span className="attributesheader">BIRTH YEAR</span>
						<p className="attributesdetails">{person.birth_year}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">GENDER</span>
						<p className="attributesdetails">{person.gender}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">HEIGHT</span>
						<p className="attributesdetails">{person.height}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">MASS</span>
						<p className="attributesdetails">{person.mass}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">HAIR COLOR</span>
						<p className="attributesdetails">{person.hair_color}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">EYE COLOR</span>
						<p className="attributesdetails">{person.eye_color}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="attributesheader">HOMEWORLD</span>
						<p className="attributesdetails">{person.homeworld}</p>
					</div>
				</div>
			)}
		</div>
	);
};

PeopleStats.propTypes = {
	data: PropTypes.object.isRequired
};
