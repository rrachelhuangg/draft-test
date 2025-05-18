import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import Keyboard from "../components/Keyboard";
import Lamps from "../components/Lamps";

import A from "../assets/images/rotors/orientations/A.png";
import B from "../assets/images/rotors/orientations/B.png";
import C from "../assets/images/rotors/orientations/C.png";
import D from "../assets/images/rotors/orientations/D.png";
import E from "../assets/images/rotors/orientations/E.png";
import F from "../assets/images/rotors/orientations/F.png";
import G from "../assets/images/rotors/orientations/G.png";
import H from "../assets/images/rotors/orientations/H.png";
import I from "../assets/images/rotors/orientations/I.png";
import J from "../assets/images/rotors/orientations/J.png";
import K from "../assets/images/rotors/orientations/K.png";
import L from "../assets/images/rotors/orientations/L.png";
import M from "../assets/images/rotors/orientations/M.png";
import N from "../assets/images/rotors/orientations/N.png";
import O from "../assets/images/rotors/orientations/O.png";
import P from "../assets/images/rotors/orientations/P.png";
import Q from "../assets/images/rotors/orientations/Q.png";
import R from "../assets/images/rotors/orientations/R.png";
import S from "../assets/images/rotors/orientations/S.png";
import T from "../assets/images/rotors/orientations/T.png";
import U from "../assets/images/rotors/orientations/U.png";
import V from "../assets/images/rotors/orientations/V.png";
import W from "../assets/images/rotors/orientations/W.png";
import X from "../assets/images/rotors/orientations/X.png";
import Y from "../assets/images/rotors/orientations/Y.png";
import Z from "../assets/images/rotors/orientations/Z.png";
import gears_Icon from "../assets/images/rotors/gears.png";
import rod_Icon from "../assets/images/rotors/rod.png";

import { SetupEnigma, EncodeLetter, UpdateRotors} from "../EncryptAlgo";


function HomePage(){
    const [input, setInput] = useState("");
    const [encodedInput, setEncodedInput] = useState("");
    const [fullEncodedInput, setFullEncodedInput] = useState("");
    const [rotorLetters, setRotorLetters] = useState(["A", "A", "A"]);

    const rotor_images = {A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z};

    //enigma machine initialization
    const machine = useRef(null);
    useEffect(()=>{
        const [plugboard, rotors, reflector] = SetupEnigma();
        const rotors_rotations = Array.from({length: 3}, ()=>Math.floor(Math.random()*26));
        const initial_rotor_letters = rotors_rotations.map(r => "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[r%26]);
        setRotorLetters(initial_rotor_letters);
        machine.current = {plugboard, rotors, reflector, rotors_rotations};
    }, []);

    const handleInputEntered = (e) => {
        const text = e.target.value.charAt(e.target.value.length-1).toUpperCase();

        let encodedLetter = "";
        if("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(text) === false){
            encodedLetter = text;
        }
        else{
            const {plugboard, rotors, reflector, rotors_rotations} = machine.current;
            encodedLetter = EncodeLetter(text, plugboard, rotors, reflector);
            UpdateRotors(rotors, rotors_rotations);
            const updatedRotorLetters = rotors_rotations.map(r => "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[r%26]);
            setRotorLetters(updatedRotorLetters);
        }

        setInput(text);
        setEncodedInput(encodedLetter);
        setFullEncodedInput(prev => prev + encodedLetter);
    }

    useEffect(() => {
        if (!input) return;
        const timeout = setTimeout(()=>{
            setInput("");
            setEncodedInput("");
        }, 150);
        return () => clearTimeout(timeout);
    }, [input]);

    return(
        <div id = "card">
            <div id = "top-rectangle">
                <div id = "name">
                    the enigma machine.  
                    <div class="inner-description">
                        <a href="https://google.com" target="_blank" class="temp-styling">about</a>
                        encode:
                        <a href="https://google.com" target="_blank" class="temp-styling">documents</a>
                    </div>
                </div>
            </div>
            <div id = "bottom-rectangle">
                <div id="enigma-body">
                    <div id="display-area">
                        <textarea id = "plain-text-input" rows="12" cols="50" onChange={handleInputEntered}>plain text input: </textarea>
                        <div id="rotors-container">
                            <img src={rod_Icon} id="rod"/>
                            <div id="rotors">
                                <img src={rotor_images[rotorLetters[0]]} class="rotor"/>
                                <img src={gears_Icon} class="gears"/>
                                <img src={rotor_images[rotorLetters[1]]} class="rotor"/>
                                <img src={gears_Icon} class="gears"/>
                                <img src={rotor_images[rotorLetters[2]]} class="rotor"/>
                            </div>
                        </div>
                        <textarea id = "encoded-output" rows="12" cols="50" value={"encoded text: " + fullEncodedInput}>encoded text: </textarea>
                    </div>
                    <Lamps pressed={encodedInput}/>
                    <Keyboard pressed={input}/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;