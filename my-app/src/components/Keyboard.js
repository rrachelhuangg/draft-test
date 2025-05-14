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

function Keyboard(){
    return(
        <div id="keyboard">
            <div id="top-row">
                <img src={Q_unpressed} class="unpressed-keys"/>
                <img src={W_unpressed} class="unpressed-keys"/>
                <img src={E_unpressed} class="unpressed-keys"/>
                <img src={R_unpressed} class="unpressed-keys"/>
                <img src={T_unpressed} class="unpressed-keys"/>
                <img src={Z_unpressed} class="unpressed-keys"/>
                <img src={U_unpressed} class="unpressed-keys"/>
                <img src={I_unpressed} class="unpressed-keys"/>
                <img src={O_unpressed} class="unpressed-keys"/>
            </div>
            <div id="middle-row">
                <img src={A_unpressed} class="unpressed-keys"/>
                <img src={S_unpressed} class="unpressed-keys"/>
                <img src={D_unpressed} class="unpressed-keys"/>
                <img src={F_unpressed} class="unpressed-keys"/>
                <img src={G_unpressed} class="unpressed-keys"/>
                <img src={H_unpressed} class="unpressed-keys"/>
                <img src={J_unpressed} class="unpressed-keys"/>
                <img src={K_unpressed} class="unpressed-keys"/>
            </div>
            <div id="bottom-row">
                <img src={P_unpressed} class="unpressed-keys"/>
                <img src={Y_unpressed} class="unpressed-keys"/>
                <img src={X_unpressed} class="unpressed-keys"/>
                <img src={C_unpressed} class="unpressed-keys"/>
                <img src={V_unpressed} class="unpressed-keys"/>
                <img src={B_unpressed} class="unpressed-keys"/>
                <img src={N_unpressed} class="unpressed-keys"/>
                <img src={M_unpressed} class="unpressed-keys"/>
                <img src={L_unpressed} class="unpressed-keys"/>
            </div>
        </div>
    );
}

export default Keyboard;