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
			{typeof person !== "undefined" && (
				<div className="row row mb-5 detailspadding">
					<div className="col text-center">
						<span className="detailsheader">BIRTH YEAR</span>
						<p className="detailsattributes">{person.birth_year}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">GENDER</span>
						<p className="detailsattributes">{person.gender}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">HEIGHT</span>
						<p className="detailsattributes">{person.height}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">MASS</span>
						<p className="detailsattributes">{person.mass}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">HAIR COLOR</span>
						<p className="detailsattributes">{person.hair_color}</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="col text-center">
						<span className="detailsheader">EYE COLOR</span>
						<p className="detailsattributes">{person.eye_color}</p>
					</div>
				</div>
			)}
		</div>
	);
};

DetailStats.propTypes = {
	data: PropTypes.object.isRequired
};
