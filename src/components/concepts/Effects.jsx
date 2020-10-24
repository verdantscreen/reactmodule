import React, { useState, useEffect } from "react";

const Effects = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h2>Below are some important points regarding Effects:</h2>
        <ul>
          <li>
            They are triggered with state and prop updates, as well as after
            initial render to the DOM.
          </li>
          <li>
            Effects are used to trigger certain actions based on changes to the
            component.
          </li>
          <li>
            Effects can return cleanup functions, which can clean up timers
            using memory, listeners to outside APIs, and other functions which
            may use system resources.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Effects;
