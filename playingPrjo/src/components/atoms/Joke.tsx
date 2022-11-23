import { useState } from 'react';

export default function Joke({ id, text, favorite, onFavorite, onDelete, likes, onLike, onDisLike }) {


    const handleLike = () => {

        onLike(id)

    }


    const handleDisLike = () => {
        onDisLike(id)

    }

    const handleFavorite = () => {
        onFavorite(id);

    }



    return (
        <div>
            <p>{text}</p>
            {/* <p>❤❤❤♡♡</p> */}
            <p>Like:{likes}</p>
            <p>Favorite: {favorite ? "YES" : "NO"}</p>
            <button onClick={handleLike}>👍</button>
            <button onClick={handleDisLike}>👋</button>

            <button onClick={handleFavorite}>Favorite</button>
            <button onClick={() => onDelete(id)}>delete Joke</button>
        </div>

    )


};


