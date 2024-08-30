import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header';
import AboutMe from './components/AboutMe';


function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header/>
      <AboutMe/>
		</>
	);
}

export default App;
