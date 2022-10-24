import React from "react";
import Wouter from '../images/Wouter.jpg';
import '../styles/home.css';

export const Home = () => {

    return (
        // <div className="bg-[url('../images/Wouter.jpg')]"></div>
        <div className="container">
            <img className="Headpicture" src={ Wouter } alt="foto Wouter"/>
        </div>
    )
}

