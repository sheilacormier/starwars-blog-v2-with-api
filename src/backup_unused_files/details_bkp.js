import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../js/store/appContext";
import PropTypes from "prop-types";
import { DetailStats } from "../component/detailstats";
import { PlanetStats } from "../js/component/planetstats";
import { StarshipStats } from "../js/component/starshipstats";

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
			<div className="container">
				{typeof type !== "undefined" && typeof currentID !== "undefined" && store[type].length > 0 && (
					<>
						<div className="row no-gutters">
							<div className="col-12 col-lg-7 align-self-center">
								<img
									src="https://www.nme.com/wp-content/uploads/2021/01/markhamill-lukeskywalker-2000x1270-1.jpg"
									className="detailsimage rounded"
								/>
							</div>
							<div className="col-12 col-lg-5 p-3 p-xl-4 detailsdescription detailsborder">
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
								<img
									className="details-icon"
									src="https://starwarsblog.starwars.com/wp-content/uploads/2017/08/swblog-author-swcom-bb8-C.png"
								/>
							</div>
						</div>

						{type === "person" && <DetailStats data={store.person[currentID]} />}
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
