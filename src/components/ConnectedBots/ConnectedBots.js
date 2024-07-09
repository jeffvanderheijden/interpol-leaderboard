import React, { useEffect, useState } from "react"
import "./ConnectedBots.css"

const ConnectedBots = () => {
    const [connectedAmount, setConnectedAmount] = useState(0);
    // Set initial arcs data based on amount of groups
    useEffect(() => {
        async function fetchData() {            
            const groups = await getGroups();
            console.log(groups);
            setConnectedAmount(groups.length);
        }
        fetchData();
    }, []);

    // Update arcs data every minute
    // useInterval(
    //     async () => {
    //         const groups = await getGroups();
    //         setArcsData(data.slice(0, groups.length));
    //     }, 60000
    // );

    return (
        <div className="connectedBots">
            <h1>BotNet</h1>
            <p>Connected bots: <span className="positive">{connectedAmount}</span></p>
            <p>Destroyed bots: <span className="negative">5</span></p>
        </div>
    )
}

export default ConnectedBots;