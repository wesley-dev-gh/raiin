"use client";

import PresetFilter1 from "./Background/PresetFilter1";
import PresetFilter2 from "./Background/PresetFilter2";
import Video from "./Background/Video";

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Video />
      <PresetFilter1 />
      <PresetFilter2 />
      <div
        className="absolute inset-0 pointer-events-none z-0 backdrop-blur-xs"
        style={{
          maskImage: `
            linear-gradient(to right, 
              black 0%, 
              black 20%, 
              transparent 30%, 
              transparent 70%, 
              black 80%, 
              black 100%
            ),
            linear-gradient(to bottom, 
              black 0%, 
              black 30%, 
              transparent 40%, 
              transparent 60%, 
              black 70%, 
              black 100%
            )
          `,
          WebkitMaskImage: `
            linear-gradient(to right, 
              black 0%, 
              black 20%, 
              transparent 30%, 
              transparent 70%, 
              black 80%, 
              black 100%
            ),
            linear-gradient(to bottom, 
              black 0%, 
              black 30%, 
              transparent 40%, 
              transparent 60%, 
              black 70%, 
              black 100%
            )
          `,
          maskComposite: "add",
          WebkitMaskComposite: "source-over",
        }}
      />
    </div>
  );
};

export default Background;
