

import React from "react";

function ColorPalette(){
    return(
        <div>
            <h1 className="text-blue-400">Select Color</h1>
            <div className="bg-gray-100 flex flex-row justify-between px-1 rounded shadow">
                <div className="bg-purple-400 p-5 rounded">Purple</div>
                <div className="bg-green-100 dark:bg-green-400 p-5 rounded">Green</div>
                <div className="bg-rose-400 p-5 rounded">Purple</div>
            </div>
        </div>
    )
}

export default ColorPalette;