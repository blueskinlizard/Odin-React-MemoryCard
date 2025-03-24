import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
export default function cardComposition(props){
    const [pokemonData, pokemonSetData] = useState([]);
    //fetches our API based off designated prop amount
    useEffect(() =>{
        async function fetchPokemonData() {
            for(let i = 0; i < props.cardAmount; i++){
                const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}`)

            }
        }
    }, [])
}