import React from "react"
import "./ConnectedBots.css"

const ConnectedBots = () => {
    return (
        <div className="connectedBots">
            <h1>BotNet</h1>
            <p>Connected bots: <span className="positive">58</span></p>
            <p>Destroyed bots: <span className="negative">5</span></p>
        </div>
    )
}

export default ConnectedBots;