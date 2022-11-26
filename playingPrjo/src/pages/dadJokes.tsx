import React, { useEffect, useState } from "react";
import Joke from "../components/atoms/Joke";
import JokeForm from "../components/atoms/JokeForm";

const DadJokesPage = () => {
    const [favorite, setFavorite] = useState(1);

    const [jokes, setJokes] = useState([
        {
            id: 1,
            text: "i am your father",
            likes: 0
        },
        {
            id: 2,
            text: "i am your babyYoda",
            likes: 0


        },
        {
            id: 3,
            text: "i am your Robot",
            likes: 0

        },
        {
            id: 4,
            text: "i am your God",
            likes: 0

        }, {
            id: 5,
            text: "i am your God",
            likes: 0

        }])


    // for (const j of jokes) {
    //     if (j.rating > 3) {
    //         jokesComponent.push()
    //     }
    // }
    const handleFavorite = (id) => {
        setFavorite(id)
    }
    const handleNewJoke = (text) => {
        const joke = {
            text,
            id: self.crypto.randomUUID()
        }
        // jokes.push(joke)
        setJokes([...jokes, joke])
        console.log("newJokes", text);

    };

    const handleDelete = (id) => {
        setJokes(jokes.filter(jokee => jokee.id !== id))
        console.log(id, 'delete target')

    };


    const handleLike = (id) => {
        console.log(id, "handleLike ID")
        setJokes(jokes.map(joke => {
            if (joke.id === id) {
                return { ...joke, likes: joke.likes + 1 }
            } else {
                return joke
            }
        }))
    };

    const handleDisLike = (id) => {
        setJokes(jokes.map(joke => {
            if (joke.id === id) {
                return { ...joke, likes: joke.likes - 1 }
            } else {
                return joke
            }
        }))
    };

    return (<>
        <h1>Dad Jokes</h1>

        {/* {jokes.filter(jokeee => jokeee.rating > 3).map((jokeList, index) => {

            return <Joke key={index} joke={jokeList.joke} rating={jokeList.rating} />
        })} */}
        <JokeForm onNewJoke={handleNewJoke} />
        <h1>---</h1>
        {jokes.map(jokee => (
            <Joke onDelete={handleDelete}
                favorite={favorite === jokee.id}
                onFavorite={handleFavorite}
                key={jokee.id}
                {...jokee}
                onDisLike={handleDisLike}
                onLike={handleLike} />
        ))}

    </>)

};

export default DadJokesPage;