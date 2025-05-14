import React, { useEffect, useState } from "react";
import "../index.css";
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

function Rotors(){
    return(
        <div id="rotors-container">
            <img src={rod_Icon} id="rod"/>
            <div id="rotors">
                <img src={A} class="rotor"/>
                <img src={gears_Icon} class="gears"/>
                <img src={A} class="rotor"/>
                <img src={gears_Icon} class="gears"/>
                <img src={A} class="rotor"/>
            </div>
        </div>
    );
}

export default Rotors;