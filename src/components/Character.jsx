import { Component } from 'react';

export default function Character(props) {
    const {character, navigate} = props;
    const {id, name, img} = character;
    return (
        <article>
            <img src={img} alt={img} />
            <span>{name}</span>
            <button onClick={() => navigate(id)}></button>
        </article>
    )
}