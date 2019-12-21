import React from 'react';
import '../assets/css/application.css';
import Top from './sections/top.js';
import Middle from './sections/middle.js';
import Bottom from './sections/bottom.js';

const Home = (props) => {
	return (
		<article id="home" className="overflow-hidden">
			<Top />
			<Middle />
			<Bottom />
		</article>
	);
}

export default Home;
