import React, { useState } from 'react'
const JumpToY = (value) => {
  const [stepsY, setstepsY] = useState(0);
  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value);
    if (!isNaN(inputValue)) {

      setstepsY(inputValue);
    } else {

      setstepsY(0);
    }
  };

  return (
    <div style={{
      maxWidth: '200px',
    }}>
      <div className="relative">

        <div className="bg-green-500 rounded-md p-1 flex items-center">
          <p className="text-white text-xs mr-2">Go to {"Y"}</p>
          <div className="flex-1">
            <input
              id='jumptoY'
              type="text"
              placeholder="Enter X"
              className={`p-1 rounded-md w-full text-xs border-none ${value.value}`}
              value={stepsY}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="absolute bottom-5 left-0 h-5 w-10 bg-green-500 transform rounded-all rounded-lg"></div>

      </div>
    </div>
  );
};

export default JumpToY
