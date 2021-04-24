import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	//start of favorites click to return to details
	const getLink = item => {
		if (store.planets.indexOf(item) !== -1) {
			return `/planets/${store.planets.indexOf(item)}`;
		} else if (store.person.indexOf(item) !== -1) {
			return `/person/${store.person.indexOf(item)}`;
		} else {
			return `/starships/${store.starships.indexOf(item)}`;
		}
	};
	//end of favorites click to return to details
	return (
		<nav className="navbar sticky-top navbar-dark bg-dark pb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG28.png"
						height="70"
						className="d-inline-block align-top"
						alt="starwars"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-warning dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites{" "}
						<span className="badge badge-secondary">
							<Context.Consumer>
								{({ actions }) => {
									return actions.countFavorites();
								}}
							</Context.Consumer>
						</span>
					</button>
					<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
						{store.favorites.length > 0 ? (
							store.favorites.map((item, index) => {
								return (
									<Link className="dropdown-item" to={() => getLink(item)} key={index}>
										{item.name}
										<span className="float-right" onClick={() => actions.removeFavorite(index)}>
											<i className="fas fa-trash-alt"></i>
										</span>
									</Link>
								);
							})
						) : (
							<li className="text-center">empty</li>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
