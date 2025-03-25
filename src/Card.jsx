import { useState } from "react";

export default function Card(props){

    return(
        <div className="card">
            <img src={props.imgSource}></img>
        </div>
    )
}