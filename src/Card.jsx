import { useState } from "react";

export default function Card(props){
    const [isClicked, setIsClicked] = useState(false);
    const checkIfClicked = () =>{
        console.log("Clicked");
        if(isClicked === true){
            console.log("Player loses"); //placeholder for future situation
            props.onGameOver();
        }
        else{
            setIsClicked(true);
            props.incrementScore();
        }
    }

    return(
        <div className="card" onClick={checkIfClicked}>
            <img src={props.imgSource}></img>
        </div>
    )
}