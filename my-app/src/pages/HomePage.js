import React, { useEffect, useState } from "react";
import "../index.css";
import Keyboard from "../components/Keyboard";
import Lamps from "../components/Lamps";
import Rotors from "../components/Rotors";


function HomePage(){
    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div id = "name">
                    the enigma machine.
                    <div className = "inner-description">
                        <a href="https://google.com" target="_blank">about</a>
                        encode:
                        <a href="https://google.com" target="_blank" id="temp-styling">letters</a>
                        <a href="https://google.com" target="_blank">news articles</a>
                        <a href="https://google.com" target="_blank">social media</a>
                    </div>
                </div>
            </div>
            <div id = "bottom-rectangle">
                <div id="enigma-body">
                    <Rotors/>
                    <Lamps/>
                    <Keyboard/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;