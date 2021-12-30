// export { default as Hero } from "./hero/Hero";
// export { default as Promo } from "./promo/Promo";
// export { default as Cta } from "./cta/Cta";
// export { default as Pricing } from "./pricing/Pricing";
// export { default as Featured } from "./featured/Featured";
// export { default as Trainers } from "./trainers/Trainers";
// export { default as Classes } from "./classes/Classes";
// export { default as Testimonial } from "./testimonial/Testimonial";
// export { default as Blog } from "./blog/Blog";
// export { default as Clients } from "./clients/Clients";
// export { default as DownloadApp } from "./app/DownloadApp";
// export { default as Faqs } from "./faqs/Faqs";

import React from "react";
import { Header, Footer } from "../layouts";
import Hero from "./hero/Hero";
import Promo from "./promo/Promo";
import About from "../about/About";
import Cta from "./cta/Cta";
import Pricing from "./pricing/Pricing";
import Featured from "./featured/Featured";
import Trainers from "./trainers/Trainers";
import Classes from "./classes/Classes";
import Testimonial from "./testimonial/Testimonial";
import Blog from "./blog/Blog";
import Clients from "./clients/Clients";
import DownloadApp from "./app/DownloadApp";
import Faqs from "./faqs/Faqs";
import Contact from "../contact/Contact";
const HomePage = () => {
	return (
		<>
			<Hero />
			{/* <Login /> */}
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
			<a href="#" className="back-to-top bounce">
				<i className="las la-arrow-up"></i>
			</a>
		</>
	);
};

export default HomePage;
