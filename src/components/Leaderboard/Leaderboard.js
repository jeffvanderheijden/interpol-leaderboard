import React, { useEffect, useState } from "react"
import Crown from "./../../assets/images/crown.svg";
import "./Leaderboard.css"

const Leaderboard = ({
    topThreeGroups
}) => {
    const api = "https://api.jeffvanderheijden.nl";
    const [highestPoints, setHighestPoints] = useState({});
    const [secondHighestPoints, setSecondHighestPoints] = useState({});
    const [lowestPoints, setLowestPoints] = useState({});

    useEffect(() => {
        if (topThreeGroups.length > 0) {
            // Sort the array based on the points in descending order
            let highestPoints = {};
            let secondHighestPoints = {};
            let lowestPoints = {};
            
            if (topThreeGroups.length === 1) {
                highestPoints = topThreeGroups[0];
            }  else if (topThreeGroups.length === 2) {
                const sortedData = topThreeGroups.slice().sort((a, b) => parseInt(b.points) - parseInt(a.points));

                highestPoints = sortedData[0];
                secondHighestPoints = sortedData[1];
            } else {
                const sortedData = topThreeGroups.slice().sort((a, b) => parseInt(b.points) - parseInt(a.points));

                highestPoints = sortedData[0];
                secondHighestPoints = sortedData[1];
                lowestPoints = sortedData[sortedData.length - 1];
            }

            setHighestPoints(highestPoints);
            setSecondHighestPoints(secondHighestPoints);
            setLowestPoints(lowestPoints);
        }
    }, [topThreeGroups]);

    return (
        <div className="leaderBoard">
            <div className="leaderStage">
                {Object.keys(lowestPoints).length !== 0 && (
                    <div className="podium third">
                        <div className="avatar">
                            <div className="imgWrapper">
                                <img src={`${api}/${lowestPoints.image_url}`} alt="third" />
                            </div>
                            <span>3</span>
                        </div>
                        <h1 className="teamName">{lowestPoints.name}</h1>
                        <div className="teamClass">{lowestPoints.class}</div>
                        <h1 className="score">{lowestPoints.points}</h1>
                    </div>
                )}
                {Object.keys(highestPoints).length !== 0 && (
                    <div className="podium first">
                        <div className="avatar">
                            <img className="crown" src={Crown} alt={'Leader'} />
                            <div className="imgWrapper">
                                <img src={`${api}/${highestPoints.image_url}`} alt="first" />
                            </div>                            
                            <span>1</span>
                        </div>
                        <h1 className="teamName">{highestPoints.name}</h1>
                        <div className="teamClass">{highestPoints.class}</div>
                        <h1 className="score">{highestPoints.points}</h1>
                    </div>
                )}
                {Object.keys(secondHighestPoints).length !== 0 && (
                    <div className="podium second">
                        <div className="avatar">
                            <div className="imgWrapper">
                                <img src={`${api}/${secondHighestPoints.image_url}`} alt="second" />
                            </div>
                            <span>2</span>
                        </div>
                        <h1 className="teamName">{secondHighestPoints.name}</h1>
                        <div className="teamClass">{secondHighestPoints.class}</div>
                        <h1 className="score">{secondHighestPoints.points}</h1>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Leaderboard;