import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { DetailStats } from "../component/detailstats";
import { PlanetStats } from "../component/planetstats";
import { StarshipStats } from "../component/starshipstats";

export const Details = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const personID = params.personID;
	const planetID = params.planetID;
	const starshipID = params.starshipID;
	const [type, setType] = useState(undefined);
	const [currentID, setCurrentID] = useState(undefined);

	useEffect(() => {
		if (typeof personID !== "undefined") {
			setType("person");
		} else if (typeof planetID !== "undefined") {
			setType("planets");
		} else {
			setType("starships");
		}
	}, [personID, planetID, starshipID]);

	useEffect(() => {
		if (type === "person") {
			setCurrentID(personID);
		} else if (type === "planets") {
			setCurrentID(planetID);
		} else {
			setCurrentID(starshipID);
		}
	}, [type]);

	return (
		<div className="detailsbg">
			<div className="container mt-5 mb-5">
				{typeof type !== "undefined" && typeof currentID !== "undefined" && store[type].length > 0 && (
					<>
						<div className="row">
							<div className="col mx-lg-n5">
								<img
									src="https://www.nme.com/wp-content/uploads/2021/01/markhamill-lukeskywalker-2000x1270-1.jpg"
									className="card-img-top"
								/>
							</div>
							<div className="col detailsdescription pt-4">
								<h3 className="detailsname">{store[type][currentID].name}</h3>
								<p>
									Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
									industrys standard dummy text ever since the 1500s, when an unknown printer took a
									galley of type and scrambled it to make a type specimen book. It has survived not
									only five centuries, but also the leap into electronic typesetting, remaining
									essentially unchanged.
								</p>
								<Link to="/">
									<button className="btn btn-warning">Back home</button>
								</Link>
							</div>
						</div>
						{type === "person" && <DetailStats data={store.person[currentID]} />}
						{type === "planets" && <PlanetStats data={store.planets[currentID]} />}
						{type === "starships" && <StarshipStats data={store.starships[currentID]} />}
					</>
				)}
			</div>
		</div>
	);
};

Details.propTypes = {
	characters: PropTypes.string,
	title: PropTypes.string,
	data: PropTypes.array
};
