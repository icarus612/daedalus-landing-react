import React from 'react';
import '../assets/css/application.css';
import anime from '../assets/anime/lib/anime.es.js';
import Top from './sections/top.js';
import Middle from './sections/middle.js';
import Bottom from './sections/bottom.js';

class Home extends React.Component {

	constructor(props){
		super(props);
		
	}
	
	render(){
		return (
			<article id="home" className="overflow-hidden">
					<Top />
					<Middle />
					<Bottom />
			</article>
		);
	}
  
}

export default Home;
