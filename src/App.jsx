import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/Aboutme';
import Services from './components/Services';
import Contributors from './components/Contributors';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';



function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header/>
      <AboutMe/>
			<Services/>
			<Contributors/>
			<Portfolio/>
			<Contact/>
		</>
	);
}

export default App;
