import React from "react";
import MoveXSteps from "./motion/MoveXSteps";
import TurnACWXDegrees from "./motion/TurnACWXDegrees";
import TurnCWXDegrees from "./motion/TurnCWXDegrees";
import WhenFlagClicked from "./events/WhenFlagClicked";
import WhenSpriteClicked from "./events/WhenSpriteClicked";
import SayHello from "./looks/SayHello";
import SayHelloForXSeconds from "./looks/SayHelloForXSeconds";
import RepeatXTimes from "./control/RepeatXTimes";
import WaitXSeconds from "./control/WaitXSeconds";

export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Motion"} </div>
      <MoveXSteps />
      <TurnACWXDegrees />
      <TurnCWXDegrees />
      <div className="font-bold"> {"Looks"} </div>
      <SayHello />
      <SayHelloForXSeconds />
      <div className="font-bold"> {"Events"} </div>
      <WhenFlagClicked />
      <WhenSpriteClicked />
      <div className="font-bold"> {"Control"} </div>
      <RepeatXTimes />
      <WaitXSeconds />
    </div>
  );
}
