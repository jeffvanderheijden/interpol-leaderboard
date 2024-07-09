import React from "react";
import Ring from "./../../assets/images/ring.svg";
import "./Ring.css";

const RingAnimation = () => {
    return (
        <div className="animatedRingContainer">
            <div className="animatedRing">
                <img src={Ring} alt="animated ring" />
            </div>
        </div>
    )
}

export default RingAnimation;   