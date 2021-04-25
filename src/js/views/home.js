import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [currentID, setCurrentID] = useState(undefined);

	return (
		<div className="background">
			<h2 className="header">CHARACTERS</h2>
			<div className="row cardrow mx-auto">
				{store.person.map((item, index) => {
					return (
						<div className="col-12 col-md-6 col-lg-4 col-xl p-2" key={index}>
							<div className="card m-auto" style={{ width: "18rem" }}>
								<img src={item.photo_url} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<Link to={`/person/${index}`} className="btn btn-dark">
										Learn more!
									</Link>
									<button
										href="#"
										className="btn btn-warning float-right"
										onClick={() => actions.addFavorite(item)}>
										<i className="fas fa-heart"></i>
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<h2 className="header">PLANETS</h2>
			<div className="row cardrow mx-auto">
				{store.planets.map((item, index) => {
					return (
						<div className="col-12 col-md-6 col-lg-4 col-xl p-2" key={index}>
							<div className="card m-auto" style={{ width: "18rem" }}>
								<img
									src="http://placehold.jp/250x250.png"
									className="card-img-top img-fuild"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<Link to={`/planets/${index}`} className="btn btn-dark">
										Learn more!
									</Link>
									<button
										href="#"
										className="btn btn-warning float-right"
										onClick={() => actions.addFavorite(item)}>
										<i className="fas fa-heart"></i>
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<h2 className="header">STARSHIPS</h2>
			<div className="row cardrow mx-auto">
				{store.starships.map((item, index) => {
					return (
						<div className="col-12 col-md-6 col-lg-4 col-xl p-2" key={index}>
							<div className="card m-auto" style={{ width: "18rem" }}>
								<img
									src="http://placehold.jp/250x250.png"
									className="card-img-top img-fuild"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<Link to={`/starships/${index}`} className="btn btn-dark">
										Learn more!
									</Link>
									<button
										href="#"
										className="btn btn-warning float-right"
										onClick={() => actions.addFavorite(item)}>
										<i className="fas fa-heart"></i>
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
