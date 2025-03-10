
import React, { useEffect, useState } from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ stream, modifyHistory }) {

  return (
    <div className="flex-1 h-full overflow-auto">
      <div className="inline-block bg-red-400 px-3 py-1 text-sm font-bold text-white-700 ml-2 my-2">
        {"Preview Area"}
      </div>

      <div className="p-4">
        <div className="sprites">
          <CatSprite stream={stream} modifyHistory={modifyHistory} />

        </div>
      </div>
    </div>

  );
}