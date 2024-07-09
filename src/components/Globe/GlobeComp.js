import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import data from "./data";
import { getGroups } from "./../../assets/data/dataLayer";
import globeImage from "./../../assets/images/earth_bw.jpg";

const GlobeComp = () => {
    const globeEl = useRef();
    const [arcsData, setArcsData] = useState(null);

    useEffect(() => {
        globeEl.current.pointOfView({ lat: 46.7749, lng: 40.4194, altitude: 3 });
        // Auto-rotate
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.6;
        // Disable zoom
        globeEl.current.controls().enableZoom = false;
    }, [globeEl]);

    // Get amount of teams, grab only that many arcsPoints
    useEffect(async () => {
        const groups = await getGroups();
        setArcsData(data.slice(0, groups.length));
    }, []);
    // Use a custom interval hook to get teams amount every x seconds
    
    // const arcsData = arcsData.slice(0, teams.length);

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, opacity: .8 }}>
            <Globe                
                ref={globeEl}
                autorotate={true}
                globeImageUrl={globeImage}
                atmosphereColor={"#ADFF2F"}
                backgroundColor={"rgba(0,0,0,0)"}
                arcsData={arcsData}
                arcColor={"color"}
                arcDashGap={(d) => 1 - (d.stroke - 0.1)}
                arcDashAnimateTime={(d) => 5000}
                arcStroke={"stroke"}
                labelLat={(d) => d.lat}
                labelLng={(d) => d.lng}
                labelText={(d) => d.name}
                labelSize={(d) => 0.5 + d.size}
                labelDotRadius={(d) => 0.5 + d.size}
                labelColor={() => "rgba(255, 165, 0, 0.75)"}
                labelResolution={2}
                hexBinPointWeight="size"
                hexAltitude={(d) => d.sumWeight - 0.1 + 0.05}
                hexBinResolution={4}
                hexBinMerge={true}
                enablePointerInteraction={false}
            />
        </div>
    )
}

export default GlobeComp;