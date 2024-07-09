import React from "react"
import Crown from "./../../assets/images/crown.svg";
import "./Leaderboard.css"

const Leaderboard = () => {
    return (
        <div className="leaderBoard">
            <div className="leaderStage">
                <div className="podium third">
                    <div className="avatar">
                        <span>3</span>
                    </div>
                    <div className="teamName">De Hakkende Hekkers</div>
                    <div className="teamClass">D1A</div>
                    <div className="score">2000</div>
                </div>
                <div className="podium first">
                    <div className="avatar">
                        <img className="crown" src={Crown} alt={'Leader'} />
                        <span>1</span>
                    </div>
                    <div className="teamName">Team Victory</div>
                    <div className="teamClass">D1C</div>
                    <div className="score">2450</div>
                </div>
                <div className="podium second">
                    <div className="avatar">
                        <span>2</span>
                    </div>
                    <div className="teamName">D1F de gekste</div>
                    <div className="teamClass">D1F</div>
                    <div className="score">2150</div>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard;