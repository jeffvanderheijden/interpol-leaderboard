import React, { useEffect, useState } from "react"
import Crown from "./../../assets/images/crown.svg";
import "./Leaderboard.css"

const Leaderboard = ({
    topThreeGroups
}) => {
    const [highestPoints, setHighestPoints] = useState({});
    const [secondHighestPoints, setSecondHighestPoints] = useState({});
    const [lowestPoints, setLowestPoints] = useState({});

    useEffect(() => {
        if (topThreeGroups.length > 0) {
            // Sort the array based on the points in descending order
            const sortedData = topThreeGroups.slice().sort((a, b) => parseInt(b.points) - parseInt(a.points));

            const highestPoints = sortedData[0];
            const secondHighestPoints = sortedData[1];
            const lowestPoints = sortedData[sortedData.length - 1];

            setHighestPoints(highestPoints);
            setSecondHighestPoints(secondHighestPoints);
            setLowestPoints(lowestPoints);
        }
    }, [topThreeGroups]);

    return (
        <div className="leaderBoard">
            <div className="leaderStage">
                {lowestPoints && (
                    <div className="podium third">
                        <div className="avatar">
                            <span>3</span>
                        </div>
                        <h1 className="teamName">{lowestPoints.name}</h1>
                        <div className="teamClass">{lowestPoints.class}</div>
                        <h1 className="score">{lowestPoints.points}</h1>
                    </div>
                )}
                {highestPoints && (
                    <div className="podium first">
                        <div className="avatar">
                            <img className="crown" src={Crown} alt={'Leader'} />
                            <span>1</span>
                        </div>
                        <h1 className="teamName">{highestPoints.name}</h1>
                        <div className="teamClass">{highestPoints.class}</div>
                        <h1 className="score">{highestPoints.points}</h1>
                    </div>
                )}
                {secondHighestPoints && (
                    <div className="podium second">
                        <div className="avatar">
                            <span>2</span>
                        </div>
                        <h1 className="teamName">{secondHighestPoints.name}</h1>
                        <div className="teamClass">{highestPoints.class}</div>
                        <h1 className="score">{highestPoints.points}</h1>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Leaderboard;