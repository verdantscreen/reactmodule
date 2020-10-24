import React from "react";

const JSXRules = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1 className="section-title">JSX</h1>
        <dl>
          <dt>Resembles HTML</dt>
          <dd>It's not, it's actually closer to JS.</dd>
          <dt>React Elements</dt>
          <dd>
            These are used to construct and update the DOM, or what you see on
            the screen.
          </dd>
          <dt>Not Required</dt>
          <dd>You can write in vanilla JS, but most people like to use JSX</dd>
        </dl>
        <hr />
      </div>
      <NormalComponent />
      <CreateElementComponent />
    </div>
  );
};

const NormalComponent = () => {
  return (
    <div style={{ border: "2px solid black", background: "cyan" }}>
      <h1>Normal Function Component</h1>
      <p>This was constructed with JSX in the return.</p>
      <img src="https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg" />
    </div>
  );
};

const CreateElementComponent = () => {
  return React.createElement(
    "div",
    {
      style: {
        border: "2px solid black",
        background: "cyan",
      },
    },
    React.createElement("h1", null, "Normal Function Component"),
    React.createElement(
      "p",
      null,
      "This was constructed with JSX in the return."
    ),
    React.createElement("img", {
      src: "https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg",
    })
  );
};

export default JSXRules;
