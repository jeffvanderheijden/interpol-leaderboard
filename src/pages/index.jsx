import React, { useEffect, useState } from "react"
import GlobeComp from "../components/Globe/GlobeComp"
import data from "../components/Globe/data";
import useInterval from "./../helpers/hooks/useInterval";
import { getGroups } from "./../assets/data/dataLayer";
import Polygon from "../components/Polygon/Polygon"
import RingAnimation from "../components/RingAnimation/RingAnimation"
import Leaderboard from "../components/Leaderboard/Leaderboard"
import ConnectedBots from "../components/ConnectedBots/ConnectedBots"
import NoSSR from "../components/NoSSR/NoSSR"
import "./../assets/styles/Reset.css"

const IndexPage = () => {
  const [arcsData, setArcsData] = useState([]);
  const [connectedAmount, setConnectedAmount] = useState(0);

  // Set initial arcs data based on amount of groups, also set amount of groups
  useEffect(() => {
    console.log('useEffect test')
    async function fetchData() {
        console.log("fetching data")
        const groups = await getGroups();
        console.log(groups);
        setArcsData(data.slice(0, groups.length ? groups.length : 0));
        setConnectedAmount(groups.length ? groups.length : 0);
    }
    fetchData();
  }, []);

   // Update arcs & groups amount data every minute
   useInterval(
      async () => {
          const groups = await getGroups();
          setArcsData(data.slice(0, groups.length ? groups.length : 0));
          setConnectedAmount(groups.length ? groups.length : 0);
      }, 60000
  );

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#000" }}>
      <NoSSR>
        <Polygon />
        <GlobeComp initialArcsData={arcsData} />
        <RingAnimation /> 
        <Leaderboard /> 
        <ConnectedBots initialConnectedAmount={connectedAmount} /> 
        {/* amount of botnets equal to amount of student teams. */}
        {/* everytime a team completes all tasks, one botnot goes offline */}
        {/* when all botnets are offline, the hacker is revealed. */}
      </NoSSR>
    </div>
  )
}

export default IndexPage;

export const Head = () => <title>Leaderboard</title>
