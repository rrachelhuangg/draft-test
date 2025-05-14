import React, { useEffect, useState } from "react";
import "../index.css";
import A_unpressed from "../assets/images/unlit_lamps/A.png"
import B_unpressed from "../assets/images/unlit_lamps/B.png"
import C_unpressed from "../assets/images/unlit_lamps/C.png"
import D_unpressed from "../assets/images/unlit_lamps/D.png"
import E_unpressed from "../assets/images/unlit_lamps/E.png"
import F_unpressed from "../assets/images/unlit_lamps/F.png"
import G_unpressed from "../assets/images/unlit_lamps/G.png"
import H_unpressed from "../assets/images/unlit_lamps/H.png"
import I_unpressed from "../assets/images/unlit_lamps/I.png"
import J_unpressed from "../assets/images/unlit_lamps/J.png"
import K_unpressed from "../assets/images/unlit_lamps/K.png"
import L_unpressed from "../assets/images/unlit_lamps/L.png"
import M_unpressed from "../assets/images/unlit_lamps/M.png"
import N_unpressed from "../assets/images/unlit_lamps/N.png"
import O_unpressed from "../assets/images/unlit_lamps/O.png"
import P_unpressed from "../assets/images/unlit_lamps/P.png"
import Q_unpressed from "../assets/images/unlit_lamps/Q.png"
import R_unpressed from "../assets/images/unlit_lamps/R.png"
import S_unpressed from "../assets/images/unlit_lamps/S.png"
import T_unpressed from "../assets/images/unlit_lamps/T.png"
import U_unpressed from "../assets/images/unlit_lamps/U.png"
import V_unpressed from "../assets/images/unlit_lamps/V.png"
import W_unpressed from "../assets/images/unlit_lamps/W.png"
import X_unpressed from "../assets/images/unlit_lamps/X.png"
import Y_unpressed from "../assets/images/unlit_lamps/Y.png"
import Z_unpressed from "../assets/images/unlit_lamps/Z.png"

function Lamps(){
    return(
        <div id="lamps">
            <div id="top-row">
                <img src={Q_unpressed} class="unlit-lamps"/>
                <img src={W_unpressed} class="unlit-lamps"/>
                <img src={E_unpressed} class="unlit-lamps"/>
                <img src={R_unpressed} class="unlit-lamps"/>
                <img src={T_unpressed} class="unlit-lamps"/>
                <img src={Z_unpressed} class="unlit-lamps"/>
                <img src={U_unpressed} class="unlit-lamps"/>
                <img src={I_unpressed} class="unlit-lamps"/>
                <img src={O_unpressed} class="unlit-lamps"/>
            </div>
            <div id="middle-row">
                <img src={A_unpressed} class="unlit-lamps"/>
                <img src={S_unpressed} class="unlit-lamps"/>
                <img src={D_unpressed} class="unlit-lamps"/>
                <img src={F_unpressed} class="unlit-lamps"/>
                <img src={G_unpressed} class="unlit-lamps"/>
                <img src={H_unpressed} class="unlit-lamps"/>
                <img src={J_unpressed} class="unlit-lamps"/>
                <img src={K_unpressed} class="unlit-lamps"/>
            </div>
            <div id="bottom-row">
                <img src={P_unpressed} class="unlit-lamps"/>
                <img src={Y_unpressed} class="unlit-lamps"/>
                <img src={X_unpressed} class="unlit-lamps"/>
                <img src={C_unpressed} class="unlit-lamps"/>
                <img src={V_unpressed} class="unlit-lamps"/>
                <img src={B_unpressed} class="unlit-lamps"/>
                <img src={N_unpressed} class="unlit-lamps"/>
                <img src={M_unpressed} class="unlit-lamps"/>
                <img src={L_unpressed} class="unlit-lamps"/>
            </div>
        </div>
    );
}

export default Lamps;