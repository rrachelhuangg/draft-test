import React, { useEffect, useState } from "react";
import "../index.css";
import A_unpressed from "../assets/images/keys_unpressed/A.png"
import B_unpressed from "../assets/images/keys_unpressed/B.png"
import C_unpressed from "../assets/images/keys_unpressed/C.png"
import D_unpressed from "../assets/images/keys_unpressed/D.png"
import E_unpressed from "../assets/images/keys_unpressed/E.png"
import F_unpressed from "../assets/images/keys_unpressed/F.png"
import G_unpressed from "../assets/images/keys_unpressed/G.png"
import H_unpressed from "../assets/images/keys_unpressed/H.png"
import I_unpressed from "../assets/images/keys_unpressed/I.png"
import J_unpressed from "../assets/images/keys_unpressed/J.png"
import K_unpressed from "../assets/images/keys_unpressed/K.png"
import L_unpressed from "../assets/images/keys_unpressed/L.png"
import M_unpressed from "../assets/images/keys_unpressed/M.png"
import N_unpressed from "../assets/images/keys_unpressed/N.png"
import O_unpressed from "../assets/images/keys_unpressed/O.png"
import P_unpressed from "../assets/images/keys_unpressed/P.png"
import Q_unpressed from "../assets/images/keys_unpressed/Q.png"
import R_unpressed from "../assets/images/keys_unpressed/R.png"
import S_unpressed from "../assets/images/keys_unpressed/S.png"
import T_unpressed from "../assets/images/keys_unpressed/T.png"
import U_unpressed from "../assets/images/keys_unpressed/U.png"
import V_unpressed from "../assets/images/keys_unpressed/V.png"
import W_unpressed from "../assets/images/keys_unpressed/W.png"
import X_unpressed from "../assets/images/keys_unpressed/X.png"
import Y_unpressed from "../assets/images/keys_unpressed/Y.png"
import Z_unpressed from "../assets/images/keys_unpressed/Z.png"

function Keyboard({pressed}){
    return(
        <div id="keyboard">
            <div id="top-row">
                <img src={Q_unpressed} className={`unpressed-keys ${pressed === "Q" ? "pressed-key": ""}`}/>
                <img src={W_unpressed} className={`unpressed-keys ${pressed === "W" ? "pressed-key": ""}`}/>
                <img src={E_unpressed} className={`unpressed-keys ${pressed === "E" ? "pressed-key": ""}`}/>
                <img src={R_unpressed} className={`unpressed-keys ${pressed === "R" ? "pressed-key": ""}`}/>
                <img src={T_unpressed} className={`unpressed-keys ${pressed === "T" ? "pressed-key": ""}`}/>
                <img src={Z_unpressed} className={`unpressed-keys ${pressed === "Z" ? "pressed-key": ""}`}/>
                <img src={U_unpressed} className={`unpressed-keys ${pressed === "U" ? "pressed-key": ""}`}/>
                <img src={I_unpressed} className={`unpressed-keys ${pressed === "I" ? "pressed-key": ""}`}/>
                <img src={O_unpressed} className={`unpressed-keys ${pressed === "O" ? "pressed-key": ""}`}/>
            </div>
            <div id="middle-row">
                <img src={A_unpressed} className={`unpressed-keys ${pressed === "A" ? "pressed-key": ""}`}/>
                <img src={S_unpressed} className={`unpressed-keys ${pressed === "S" ? "pressed-key": ""}`}/>
                <img src={D_unpressed} className={`unpressed-keys ${pressed === "D" ? "pressed-key": ""}`}/>
                <img src={F_unpressed} className={`unpressed-keys ${pressed === "F" ? "pressed-key": ""}`}/>
                <img src={G_unpressed} className={`unpressed-keys ${pressed === "G" ? "pressed-key": ""}`}/>
                <img src={H_unpressed} className={`unpressed-keys ${pressed === "H" ? "pressed-key": ""}`}/>
                <img src={J_unpressed} className={`unpressed-keys ${pressed === "J" ? "pressed-key": ""}`}/>
                <img src={K_unpressed} className={`unpressed-keys ${pressed === "K" ? "pressed-key": ""}`}/>
            </div>
            <div id="bottom-row">
                <img src={P_unpressed} className={`unpressed-keys ${pressed === "P" ? "pressed-key": ""}`}/>
                <img src={Y_unpressed} className={`unpressed-keys ${pressed === "Y" ? "pressed-key": ""}`}/>
                <img src={X_unpressed} className={`unpressed-keys ${pressed === "X" ? "pressed-key": ""}`}/>
                <img src={C_unpressed} className={`unpressed-keys ${pressed === "C" ? "pressed-key": ""}`}/>
                <img src={V_unpressed} className={`unpressed-keys ${pressed === "V" ? "pressed-key": ""}`}/>
                <img src={B_unpressed} className={`unpressed-keys ${pressed === "B" ? "pressed-key": ""}`}/>
                <img src={N_unpressed} className={`unpressed-keys ${pressed === "N" ? "pressed-key": ""}`}/>
                <img src={M_unpressed} className={`unpressed-keys ${pressed === "M" ? "pressed-key": ""}`}/>
                <img src={L_unpressed} className={`unpressed-keys ${pressed === "L" ? "pressed-key": ""}`}/>
            </div>
        </div>
    );
}

export default Keyboard;