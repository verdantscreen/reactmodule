// Functional Components have the following capabilities/traits:
// - render info with or without changing state
// - Hook ready: useState and useEffect can cause informational or presentational changes in our FCs
// - no 'this' keyword
// - often used as child components that will inherit properties aka 'props' from a parent component
// RULE: component names must be capitalized and typically are in PascalCaseLikeThisExampleHere
// RULE: components must be wrapped in a single parent element! (e.g. <div></div>) otherwise you'll get this error:
// 'JSX elements must have one parent'
// in React, data flows in one direct (aka unidirectional)

import React from "react";
import { Row, Col, Card, CardText, CardTitle, Button } from "reactstrap"; //TODO: come back to More Challenges section of 3.4

//  a functional component is essentially a function that should return something
// like a function, we need to call a functional component in order to use it
// usually when you call an instance of a FC, the call will be like a self-closing HTML tag and usually the same name as the FC itself (FunctionalComponentDemo in this e.g. <FunctionalComponentDemo />)
// but where do we call our FC? in the App.js

const FunctionalComponentDemo = () => {
  return (
    // looks like simple HTML but it's really JSX!
    <div className="main">
      <div className="mainDiv">
        <h1>Functional Component</h1>
        <p>
          Functional Components are the primary tool in React to build a small,
          modular piece of your page.
        </p>
        <dl>
          <dt>Can use state</dt>
          <dd>
            With the 'useState' hook, FCs can now both render a display to the
            page AND update the information to be shown.
          </dd>
          <dt>No 'this' keyword</dt>
          <dd>
            Older class components use 'this' but FCs have no 'this' object.
          </dd>
          <dt>Can use effects</dt>
          <dd>
            With the 'useEffect' hook, functional components can perform side
            effects with any props or state changes.
          </dd>
          <dt>return()</dt>
          <dd>
            Must return a single element, but this element may have nested
            elements within.
          </dd>
        </dl>
        <h1>Functional Syntax versus Arrow Function</h1>
        <hr />
        <h1>Challenge</h1>
        <Row>
          <Col sm="6">
            <Card>
              <img
                width="100%"
                height="280px"
                src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
              />
              <CardTitle>Regular JS Function</CardTitle>
              <CardText>const HelloWorld = function() </CardText>
              <FunctionalComponentNoArrow />
              <Button>Go Some Place</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <img
                width="100%"
                height="280px"
                src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
              />
              <CardTitle>Fat Arrow Function</CardTitle>
              <CardText>const HelloWorld = () fatarrow </CardText>
              <FunctionalComponentFatArrow />
              <Button>Go Some Place</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const FunctionalComponentNoArrow = function () {
  return <h4>Hello World</h4>;
};

const FunctionalComponentFatArrow = () => <h3>Hello Fat Arrow World</h3>;

// for our component to work (aka become useable/callable in our app that will render to the DOM), we must export it like this:
export default FunctionalComponentDemo; // or like this: module.exports fillintheblankcan'trememberhow
