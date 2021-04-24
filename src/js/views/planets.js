import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { PeopleStats } from "../component/peoplestats";
import { PlanetStats } from "../component/planetstats";
import { StarshipStats } from "../component/starshipstats";

export const Planets = props => {
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
			setCurrentID(personID);
		} else if (typeof planetID !== "undefined") {
			setType("planets");
			setCurrentID(planetID);
		} else {
			setType("starships");
			setCurrentID(starshipID);
		}
	}, [personID, planetID, starshipID]);

	return (
		<div className="content-wrapper detailsbg">
			<div className="container mt-5">
				{typeof type !== "undefined" && typeof currentID !== "undefined" && store[type].length > 0 && (
					<>
						<div className="row no-gutters">
							<div className="col-12 col-lg-7 align-self-center">
								<img src={store.planet[currentID].photo_url} className="detailsimage rounded" />
							</div>
							<div className="col-12 col-lg-5 p-3 p-xl-4 detailsdescription detailsborder">
								<h3 className="detailsname">{store[type][currentID].name}</h3>
								<p>
									This is planets - Simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industrys standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen book.
									It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged.
								</p>
								<Link to="/">
									<button className="btn btn-warning">Back home</button>
								</Link>
								<img
									className="details-icon"
									src="https://starwarsblog.starwars.com/wp-content/uploads/2017/08/swblog-author-swcom-bb8-C.png"
								/>
							</div>
						</div>

						{type === "planets" && <PlanetStats data={store.planets[currentID]} />}
					</>
				)}
			</div>
		</div>
	);
};

Planets.propTypes = {
	characters: PropTypes.string,
	title: PropTypes.string,
	data: PropTypes.array
};
