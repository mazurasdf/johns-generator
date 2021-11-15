import { useState } from 'react';
import './App.css';

function App() {
	const intros = [
		"Not fair! That only happened because",
		"I only lost because",
		"You only won because",
		"This is BS! How am I supposed to win when",
		"I wouldn't have lost if",
		"That match doesn't count because"
	];
	const premises = [
		"my eyes are",
		"the sun is",
		"my controller is",
		"the TV is",
		"my hands are",
		"my chair is",
		"I am",
		"my fingers are",
		"my opponent is",
		"my character is",
		"your character is",
		"my thumb is",
		"my ears are",
		"the console is",
		"the room is",
		"my head is",
		"my A button is",
		"you said I was",
		"the stage was",
		"the temperature is",
		"I felt",
		"this game is",
		"the lag is",
		"your up smash is",
		"my bair is",
		"my frame data",
		"my glasses"
	];
	const problems = [
		"in my eyes",
		"in pain",
		"sweaty",
		"tired",
		"too cold",
		"too big",
		"not big enough",
		"upside down",
		"too loud",
		"confusing",
		"a little lost",
		"spinning",
		"too fast",
		"too slow",
		"too small",
		"hot and sweaty",
		"annoying",
		"too bright",
		"not fair",
		"simply unbearable",
		"in my hands",
		"red",
		"broken",
		"not very good",
		"OP"
	];

	const generateJohn = () => {
		return `${intros[Math.floor(Math.random() * intros.length)]} ${premises[Math.floor(Math.random() * premises.length)]} ${problems[Math.floor(Math.random() * problems.length)]}.`;
	}
	const [sentence, setSentence] = useState(generateJohn());

	return (
		<div className="App">
			<div id="top">
				<div id="topLeft"></div>
				<div id="topRight"></div>
			</div>
			<div id="bottom">
				<div id="bottomLeft"></div>
				<div id="bottomRight">
					<h1>"{sentence}"</h1>
					<button onClick={()=>setSentence(generateJohn())}><h3>lost again?</h3></button>
				</div>
			</div>
		</div>
	);
}

export default App;
