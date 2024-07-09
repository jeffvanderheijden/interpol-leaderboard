import React, { useEffect, useState } from "react"
// import useInterval from "./../../helpers/hooks/useInterval"
import { getGroups } from "./../../assets/data/dataLayer"
import "./ConnectedBots.css"

const ConnectedBots = ({
    initialData
}) => {
    const [connectedAmount, setConnectedAmount] = useState(initialData);

    useEffect(() => {
        setConnectedAmount(initialData.length);
    }, [initialData]);

    return (
        <div className="connectedBots">
            <h1>BotNet</h1>
            <p>Connected bots: <span className="positive">{connectedAmount}</span></p>
            <p>Destroyed bots: <span className="negative">5</span></p>
        </div>
    )
}

export default ConnectedBots;