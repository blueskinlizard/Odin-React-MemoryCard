/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useEffect } from "react";
import Card from "./card";
export default function CardComposition(props){
    const [pokemonData, pokemonSetData] = useState([]);
    const [pokemonComponentData, setPokemonComponentData] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    //fetches our API based off designated prop amount
    useEffect(() =>{
        console.log("Running");
        async function fetchPokemonData() {
            try{
                console.log("Fetching hopefully");
                const promises = Array.from({length: props.cardAmount}, (_, i) => {
                    return fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`).then(res => res.json());
                })
                
                const results = await Promise.all(promises);
                pokemonSetData(results);
                setPokemonComponentData(results.map((pokemon) => {
                    return <Card key={pokemon.name} imgSource={pokemon.sprites.front_default} onGameOver={handleGameOver} incrementScore = {incrementScore}/>
                }))
            }
            catch(error){
                console.log("Error fetching data. Error was: " +error);
            }
            
        }
        fetchPokemonData();
    }, [])

    const handleGameOver = () =>{
        setGameOver(true);
        console.log("State changed to gameOver = true")
    }
    const displayScore = () =>{
        return <h1 id="ScoreDisplay">Score: {score}</h1>;
    }
    const incrementScore = () =>{
        setScore((prevScore) => prevScore + 1)
        shuffleArray(pokemonComponentData);
    }
    const shuffleArray = (arrayParam) =>{
        arrayParam.sort(() => Math.random() - 0.5);
    }
    return(
        <div className="card-composition">
            {displayScore()}
            {gameOver? <h1>Game Over!</h1> : pokemonComponentData}
                
            
        </div>
    )   
}