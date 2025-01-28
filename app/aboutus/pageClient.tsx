import React from "react";
import Hrosect from "./_page/hrosect";
import MissionState from "./_page/missonstatement";
import VisionStat from "./_page/visionstat";
import Originfacts from "./_page/originfacts";
import Challenges from "./_page/chanllenges";
import Cencus from "./_page/cencus";
import Geograpghy from "./_page/geograpy";

const PageClient = () => {
  return (
    <div>
      <Hrosect />
      <MissionState />
      <VisionStat />
      <Originfacts />
      <Challenges />
      <Cencus />
      <Geograpghy />
    </div>
  );
};

export default PageClient;
