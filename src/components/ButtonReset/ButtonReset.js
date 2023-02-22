import React from "react";

function ButtonReset({ action }) {
  return <button 
          className="button"
          onClick={() => action()}
        >Reset Game</button>;
}

export default ButtonReset;
