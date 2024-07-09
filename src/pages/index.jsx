import React from "react"
import GlobeComp from "../components/Globe/GlobeComp"
import Polygon from "../components/Polygon/Polygon"
import RingAnimation from "../components/RingAnimation/RingAnimation"
import Leaderboard from "../components/Leaderboard/Leaderboard"
import ConnectedBots from "../components/ConnectedBots/ConnectedBots"
import NoSSR from "../components/NoSSR/NoSSR"
import "./../assets/styles/Reset.css"

const IndexPage = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#000" }}>
      <NoSSR>
        <Polygon />
        <GlobeComp />
        <RingAnimation /> 
        <Leaderboard /> 
        <ConnectedBots /> 
        {/* amount of botnets equal to amount of student teams. */}
        {/* everytime a team completes all tasks, one botnot goes offline */}
        {/* when all botnets are offline, the hacker is revealed. */}
      </NoSSR>
    </div>
  )
}

export default IndexPage;

export const Head = () => <title>Leaderboard</title>
