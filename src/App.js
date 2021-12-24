import React from "react";
import { Switch, Route } from "react-router-dom";
import {
	About,
	Blog,
	Classes,
	Cta,
	Featured,
	Header,
	Hero,
	Pricing,
	Promo,
	Tesimonial,
	Trainers,
	Clients,
	DownloadApp,
	Faqs,
	Footer,
} from "./components";
const App = () => {
	return (
		<div className="page-wrapper">
			<Header />
			<Hero />
			<Promo />
			<About />
			<Cta />
			<Pricing />
			<Featured />
			<Trainers />
			<Classes />
			<Tesimonial />
			<Blog />
			<Clients />
			<DownloadApp />
			<Faqs />
			<Footer />
			<a href="#" className="back-to-top bounce">
				<i className="las la-arrow-up"></i>
			</a>
		</div>
	);
};

export default App;
