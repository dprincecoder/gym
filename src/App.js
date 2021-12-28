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
import { Login } from "./code";
const App = () => {
	return (
		<div className="page-wrapper">
			{/* <Header />
			<Hero />
			<Login />
			<Promo />
			<About />
			<Cta />
			<Pricing />
			<Featured />
			<Trainers />
			<Classes />
			<Testimonial />
			<Blog />
			<Clients />
			<DownloadApp />
			<Faqs />
			<Contact />
			<Footer />
			<a href="#" className="back-to-top bounce">
				<i className="las la-arrow-up"></i>
			</a> */}

			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path="/login">
					{" "}
					<Login />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
