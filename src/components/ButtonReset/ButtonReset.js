import React from "react";

function ButtonReset({ action }) {
  return <button 
          className="btn"
          autoFocus={true}
          onClick={() => action()}
        >Reset Game</button>;
}

export default ButtonReset;
