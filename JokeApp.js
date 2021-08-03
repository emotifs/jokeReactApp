import React, {useState} from 'react';
import axios from "axios";
import './JokeStyle.css';

const JokeApp = () => {
    const [joke, setJoke] = useState("When you click the button or click enter, here will apear a joke");

    const getJoke = () => {
        axios.get("https://official-joke-api.appspot.com/random_joke").then(
            (response) => {
                setJoke(response.data.setup + " ... " + response.data.punchline);
            }
        )
    }

    return(
        <div className="App joke-container">
            <p className="joke-part">
                {joke}
            </p>
            <button onClick={getJoke}>Make Me Laugh</button>
        </div>
    );
};

export default JokeApp;