import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components/layouts";
import HomePage, {
	Hero,
	Promo,
	Cta,
	Pricing,
	Featured,
	Trainers,
	Classes,
	Testimonial,
	Blog,
	Clients,
	DownloadApp,
	Faqs,
} from "./components/home";
import { About, Contact } from "./components";
import { Dashboard, Login } from "./code";
const App = () => {
	return (
		<div className="page-wrapper">
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path="/login">
					{" "}
					<Login />
				</Route>
				<Route exact path="/dashboard">
					<Dashboard />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
