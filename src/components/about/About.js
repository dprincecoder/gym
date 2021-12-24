import React from "react";

const About = () => {
	return (
		<section className="about-wrap v1 section-padding">
			<div className="container">
				<div className="row align-items-center mb-5">
					<div className="col-lg-6 col-md-12">
						<div className="section-title v1">
							<h2>How to Vigory Works</h2>
						</div>
					</div>
					<div className="col-lg-4 offset-lg-2 col-md-12">
						<div className="section-brief">
							<p>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore magna
								aliquyam erat.
							</p>
						</div>
					</div>
				</div>
				<div className="row gx-0 align-items-center">
					<div className="col-lg-6">
						<div className="about-content">
							<div className="about-promo-img">
								<div className="ab_promo">
									<img src="/assets/img/about/ab_promo-1.svg" alt="" />
								</div>
								<div className="ab_promo">
									<img src="/assets/img/about/ab_promo-2.svg" alt="" />
								</div>
							</div>
							<div className="about-promo-text">
								<h5>Our Community</h5>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
									diam nonumy eirmod tempor invidunt ut labore et dolore magna
									aliquyam erat.Sed diam voluptua. At vero eos et accusam et
									justo duo dolores et ea rebum.
								</p>
								<ul>
									<li>
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
										diam.
									</li>
									<li>
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
										diam.
									</li>
									<li>
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
										diam.
									</li>
									<li>
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
										diam.
									</li>
								</ul>
								<a
									href="about.html"
									className="btn v10"
									style={{ backgroundColor: "black" }}>
									Gym's Where Ever you are
								</a>
								<a href="about.html" className="btn v10">
									Subscribe Now
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="about-img-slider v1 owl-carousel">
							<div className="item">
								<div className="about-feat-img">
									<img src="assets/img/about/about-3.png" alt="" />
								</div>
							</div>
							<div className="item">
								<div className="about-feat-img">
									<img src="assets/img/about/about-1.png" alt="" />
								</div>
							</div>
							<div className="item">
								<div className="about-feat-img">
									<img src="assets/img/about/about-4.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
