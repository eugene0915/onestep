import { useState } from "react";


export default function JokeForm({ onNewJoke }) {

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onNewJoke(text);
        setText("");

    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setText(e.target.value)} value={text} ></input>
            <button className="bg(green)">new joke make</button>
        </form>


    )

};