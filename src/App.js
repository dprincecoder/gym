import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/home";
import {
	Dashboard,
	Login,
	EditAccount,
	GymDashboard,
	EditAccountTrainer,
} from "./code";
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
				<Route exact path="/admin">
					<Dashboard />
				</Route>
				<Route exact path="/customer">
					<EditAccount />
				</Route>
				<Route exact path="/gym">
					<GymDashboard />
				</Route>
				<Route exact path="/trainer">
					<EditAccountTrainer />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
