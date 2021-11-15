import { useState } from 'react';
import './App.css';

function App() {
	const intros = [
		"Not fair! That only happened because",
		"I only lost because",
		"You only won because",
		"This is BS! How am I supposed to win when",
		"We need to do over because",
		"That match doesn't count because",
		"I can't be expected to play when"
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
		"you said I am",
		"the stage is",
		"the temperature is",
		"this game is",
		"the lag is",
		"your up smash is",
		"your nair is",
		"my frame data is",
		"my glasses are",
		"the lights are",
		"my controls are",
		"your projectiles are",
		"my landing lag is",
		"my end lag is",
		"your neutral special is",
		"your counterpick is",
		"my c stick is",
		"the RNG is",
		"I think wavedashing is",
		"the TO is",
		"the other players are",
		"your damage output is",
		"the rules are",
		"lylat is",
		"the blast zones are",
		"the timer is",
		"your wall jump is",
		"my bracket placement is"
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
		"OP",
		"too dark",
		"too far away",
		"far too long",
		"campy",
		"confused",
		"kinda dumb",
		"not working",
		"glitching out",
		"cheating",
		"low tier",
		"kinda cute tho",
		"slippery",
		"gone",
		"taking too long",
		"gimmicky",
		"too much",
		"not making sense",
		"talking"
	];

	const generateJohn = () => {
		return `${intros[Math.floor(Math.random() * intros.length)]} ${premises[Math.floor(Math.random() * premises.length)]} ${problems[Math.floor(Math.random() * problems.length)]}.`;
	}
	const [sentence, setSentence] = useState(generateJohn());

	return (
		<div className="App">
			<div id="top">
				<div id="topLeft"></div>
				<div id="topRight">
					<h1>johns generator</h1>
				</div>
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
