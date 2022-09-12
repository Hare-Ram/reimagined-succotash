import React from "react";
import CatSprite from "./CatSprite";
// import DinoSprite from "./DinoSprite";

const PreviewArea = React.forwardRef((props, ref) => {
  // use forwardRef
  return (
    <div className="flex-row h-full overflow-y-auto p-2">
      <div ref={ref} >
        <CatSprite />
      </div>
      {/* <div>
        <DinoSprite height="100px" />
      </div> */}
    </div>
  );
})

export default PreviewArea
