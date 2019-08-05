import React from 'react';
import '../assets/css/application.css';

import anime from '../assets/anime/lib/anime.es.js';
import {animateLI} from '../assets/js/listItem.js';
import {catapult} from '../assets/js/catapult.js';
import {firstAnimation} from '../assets/js/firstAnimation.js';

class Home extends React.Component {

	constructor(props){
		super(props);
		
	}
	componentDidMount(){
		anime({
			targets: ".first-throbber .throbber-inner",
			scale: 1.6,
			border: "0px",
			easing: "easeInCubic",
			direction: "alternate",
			loop: true,
			duration: 1500,
		  })
		catapult()
		firstAnimation()
		animateLI()

	}
	render(){
		return (
			<article id="home" className="overflow-hidden">
					<section className=" position-relative overflow-visible pt-5" id='top'>
						<div className="container" id="top-container">

							<div className="d-flex flex-wrap flex-row">
								<div className="col-5 py-md-3 text-center text-white my-4">
									<div className="top-box d-flex flex-column p-5 text-center overflow-visible">

										<h1 className="dark qHeader">
											Quest: A Creative Landing Page Theme For Easy Use
										</h1>
										<h3 className="dark qHeader">
											TL;DR: Scroll through to see some cool interactive and reactive Javascript.
										</h3>

										<h5 className="dark qHeader2">
											A Project Icarus Design
										</h5>
									</div>
									<div className="throbber first-throbber">
										<div className="animated-dot2 mv-6"></div>
										<div className="throbber-inner"></div>
									</div>
								</div>
								<div className="col-5 py-md-3 text-center text-white my-4">

								</div>
								<div className="col-1 py-md-3 text-center text-white my-4" id="whereAmI">
									<div className="throbber second-throbber">
										<div className="throbber-inner pulse6"></div>
									</div>
								</div>
								<div className="col-10 py-md-3 text-center text-white my-4">

								</div>
								<div className="col-1 py-md-3 text-center text-white my-4">
									<div className="spring"></div>
								</div>

							</div>
						</div>
					</section>


													<section className="pb-5 overflow-visible" id="dot-outer">
														<div className="container" id="dot-start">
																		<div className="d-flex flex-row flex-nowrap justify-content-start align-items-stretch" >

																				<div className='col-4'>
																					<div className='image'>

																					</div>
																				</div>
																				<div className="col-8 p-3 text-left step2">
																						<h4 className="">
																								Before we get started this site Isn't necacarilly mobile frindly, but screw off. Its a math puzzle where width is my most important. It all still works it just looks like shit.
																						</h4>
																				</div>

																		</div>


																		<div className="d-flex flex-column flex-wrap justify-content-center align-items-end workflow" id="stage">
																				<div className="throbber catapult-throbber">
																						<div className="throbber-inner pulse8"></div>
																						<div className="catapult"></div>
																						
																						<div className="animated-dot2 mv-5"></div>
																				</div>
																				<div className="col-3">
																					<div className="step3">
																					</div>
																				</div>
																				<div className="col-5">
																					<div className=" step4">
																						<div className="throbber wheel-end-throbber">
																							<div className="throbber-inner pulse7"></div>
																						</div>
																					</div>
																				</div>
																				<div className="d-flex flex-column flex-wrap col-12 justify-content-left align-items-end workflow" id="stage">

																					<div className="col-11 step2 pl-3 pt-2" id="pathWidth">

																						<div>
																								<h4 className="description">
																										Debth
																								</h4>

																								<p className="description">
																										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et risus sapien. Aliquam tempus sapien non laoreet posuere. Fusce dolor nulla, interdum ultricies quam vitae, sagittis interdum enim. Nulla a nunc enim. Vestibulum mollis sodales tincidunt. Nulla ullamcorper dui quis magna feugiat, vel fringilla libero tristique. Nulla aliquet aliquam nisl, et aliquam nibh lacinia quis.
																					       </p>
																							 </div>
																						 </div>
																</div>


															</div>
														</div>
												</section>

								<section className="background-dotsLI p-5"  id="list-dot-outer">
									<div className="container" id="list-dot-start">
													<div className="d-flex flex-column flex-sm-row flex-nowrap justify-content-start align-items-stretch" >

															<div className='col-2 image'>
																	<div className="throbber top-throbber">
																			<div className="throbber-inner pulse1"></div>
																			<div className="animated-dot mv-1"></div>
																			<div className="animated-dot mv-2"></div>
																			<div className="animated-dot mv-3"></div>
																	</div>
															</div>
															<div className="col-10 ml-4 pt-5 text-left">
																	<h2 className="">
																			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et risus sapien. Aliquam tempus sapien non laoreet posuere.
																	</h2>
															</div>
													</div>


													<div className="d-flex flex-column flex-wrap flex-lg-nowrap justify-content-center align-items-end workflow landing" id="list-stage">
															<div className="throbber mid-throbber">
																	<div className="throbber-inner pulse2"></div>
															</div>
											<div className="col-7 step">
												<div className="throbber">
														<div className="throbber-inner pulse3"></div>
												</div>
																	<div>
																			<h4 className="description">
																					Speed
																			</h4>

																			<p className="description">
																					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et risus sapien. Aliquam tempus sapien non laoreet posuere. Fusce dolor nulla, interdum ultricies quam vitae, sagittis interdum enim. Nulla a nunc enim. Vestibulum mollis sodales tincidunt. Nulla ullamcorper dui quis magna feugiat, vel fringilla libero tristique. Nulla aliquet aliquam nisl, et aliquam nibh lacinia quis.                        </p>
												</div>
											</div>

															<div className="col-7 step">
																<div className="throbber">
																		<div className="throbber-inner pulse4"></div>
																</div>
																	<div>
																			<h4 className="description">
																					Debth
																			</h4>

																			<p className="description">
																					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et risus sapien. Aliquam tempus sapien non laoreet posuere. Fusce dolor nulla, interdum ultricies quam vitae, sagittis interdum enim. Nulla a nunc enim. Vestibulum mollis sodales tincidunt. Nulla ullamcorper dui quis magna feugiat, vel fringilla libero tristique. Nulla aliquet aliquam nisl, et aliquam nibh lacinia quis.                        </p>
												</div>
											</div>

															<div className="col-7 step">
																<div className="throbber">
																		<div className="throbber-inner pulse5"></div>
																</div>
																				<div>
																			<h4 className="description">
																					Functionality
																			</h4>
																			<p className="description">
																					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et risus sapien. Aliquam tempus sapien non laoreet posuere. Fusce dolor nulla, interdum ultricies quam vitae, sagittis interdum enim. Nulla a nunc enim. Vestibulum mollis sodales tincidunt. Nulla ullamcorper dui quis magna feugiat, vel fringilla libero tristique. Nulla aliquet aliquam nisl, et aliquam nibh lacinia quis.                        </p>
												</div>
											</div>
										</div>
									</div>
							</section>



			
		
			</article>
		);
	}
  
}

export default Home;
