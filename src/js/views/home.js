import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="background">
			<h2 className="header">CHARACTERS</h2>
			<div className="row cardrow mx-auto">
				{store.characters.map((characters, index) => {
					return (
						<div className="col-lg-2 col-12 mb-2" key={index}>
							<div className="card mx-auto" style={{ width: "18rem" }}>
								<img src="http://placehold.jp/250x250.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{characters.name}</h5>

									<Link to="/details" className="btn btn-dark">
										Learn more!
									</Link>
									<button href="#" className="btn btn-warning float-right">
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
				{store.planets.map((planets, index) => {
					return (
						<div className="col-lg-2 col-12 mb-2" key={index}>
							<div className="card mx-auto" style={{ width: "18rem" }}>
								<img src="http://placehold.jp/250x250.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{planets.name}</h5>
									<Link to="/planets" className="btn btn-dark">
										Learn more!
									</Link>
									<button href="#" className="btn btn-warning float-right">
										<i className="fas fa-heart"></i>
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<h2 className="header">STARTSHIPS</h2>
			<div className="row cardrow mx-auto">
				{store.starships.map((starships, index) => {
					return (
						<div className="col-lg-2 col-12 mb-2" key={index}>
							<div className="card mx-auto" style={{ width: "18rem" }}>
								<img src="http://placehold.jp/250x250.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{starships.name}</h5>
									<Link to="/starships" className="btn btn-dark">
										Learn more!
									</Link>
									<button href="#" className="btn btn-warning float-right">
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
