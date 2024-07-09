import React, { useEffect, useState } from "react"
import "./ConnectedBots.css"

const ConnectedBots = ({
    initialConnectedAmount
}) => {
    const [connectedAmount, setConnectedAmount] = useState(initialConnectedAmount);

    useEffect(() => {
        setConnectedAmount(initialConnectedAmount);
    }, [initialConnectedAmount]);

    return (
        <div className="connectedBots">
            <h1>BotNet</h1>
            <p>Connected bots: <span className="positive">{connectedAmount}</span></p>
            <p>Destroyed bots: <span className="negative">0</span></p>
        </div>
    )
}

export default ConnectedBots;