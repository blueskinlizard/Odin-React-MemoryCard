/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useEffect } from "react";
import Card from "./card";
export default function CardComposition(props){
    const [pokemonData, pokemonSetData] = useState([]);
    const [pokemonComponentData, setPokemonComponentData] = useState([]);
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
                console.log("Fetched pokemon data", results);
                pokemonSetData(results);
                setPokemonComponentData(results.map((pokemon) => {
                    return <Card key={pokemon.name} imgSource={pokemon.sprites.front_default} />
                }))
            }
            catch(error){
                console.log("Error fetching data. Error was: " +error);
            }
            
        }
        fetchPokemonData();
    }, [])
    return(
        <div className="card-composition">
            {[pokemonComponentData]}
        </div>
    )   
}