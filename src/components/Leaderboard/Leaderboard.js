import React, { useEffect } from "react"
import Crown from "./../../assets/images/crown.svg";
import { getTopThreeGroups, getGroupById } from "./../../assets/data/dataLayer";
import "./Leaderboard.css"

const Leaderboard = () => {
   
    useEffect(() => {
        async function fetchData() {
            const groups = await getTopThreeGroups();
            console.log(groups);
            groups.map((group) => {
                console.log(group);
                // getGroupById(group.group_id).then((groupData) => {
                //     console.log(groupData);
                // });
            });
        }
        fetchData();
    }, []);

    return (
        <div className="leaderBoard">
            <div className="leaderStage">
                <div className="podium third">
                    <div className="avatar">
                        <span>3</span>
                    </div>
                    <h1 className="teamName">De Hakkende Hekkers</h1>
                    <div className="teamClass">D1A</div>
                    <h1 className="score">2000</h1>
                </div>
                <div className="podium first">
                    <div className="avatar">
                        <img className="crown" src={Crown} alt={'Leader'} />
                        <span>1</span>
                    </div>
                    <h1 className="teamName">Team Victory</h1>
                    <div className="teamClass">D1C</div>
                    <h1 className="score">2450</h1>
                </div>
                <div className="podium second">
                    <div className="avatar">
                        <span>2</span>
                    </div>
                    <h1 className="teamName">D1F de gekste</h1>
                    <div className="teamClass">D1F</div>
                    <h1 className="score">2150</h1>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard;