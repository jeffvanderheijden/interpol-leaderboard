import React, { useEffect, useState } from "react"
import GlobeComp from "../components/Globe/GlobeComp"
import data from "../components/Globe/data";
import useInterval from "./../helpers/hooks/useInterval";
import { getGroups, getTopThreeGroups, getGroupById } from "./../assets/data/dataLayer";
import Polygon from "../components/Polygon/Polygon"
import RingAnimation from "../components/RingAnimation/RingAnimation"
import Leaderboard from "../components/Leaderboard/Leaderboard"
import ConnectedBots from "../components/ConnectedBots/ConnectedBots"
import NoSSR from "../components/NoSSR/NoSSR"
import "./../assets/styles/Reset.css"

const IndexPage = () => {
  const [arcsData, setArcsData] = useState([]);
  const [connectedAmount, setConnectedAmount] = useState(0);
  const [topThreeGroups, setTopThreeGroups] = useState([]);

  // Set initial arcs data based on amount of groups, also set amount of groups
  useEffect(() => {
    async function fetchData() {
      const groups = await getGroups();
      setArcsData(data.slice(0, groups.length ? groups.length : 0));
      setConnectedAmount(groups.length ? groups.length : 0);
    }
    fetchData();
  }, []);

  // Get the top three groups by points
  useEffect(() => {
    let combinedGroupsData = [];
    async function fetchData() {
      const groups = await getTopThreeGroups();
      groups.map((group) => {
        getGroupById(group.group_id).then((groupData) => {  
          const groupWithPoints = {
            ...groupData,
            points: group.total_points
          }
          combinedGroupsData.push(groupWithPoints);
        });
      });
      console.log(combinedGroupsData);
      setTopThreeGroups(combinedGroupsData);
    }
    fetchData();
  }, []);

  // Update arcs & groups amount data every minute 
  // This corresponds EXACTLY with one rotation of the globe so don't change!
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
        <Leaderboard topThreeGroups={topThreeGroups} />
        <ConnectedBots initialConnectedAmount={connectedAmount} />
      </NoSSR>
    </div>
  )
}

export default IndexPage;

export const Head = () => <title>Leaderboard</title>
