// import React, { Component } from "react";
// import { render } from "react-dom";
// import HomePage from "./HomePage";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <HomePage />
//       </div>
//     );
//   }
// }

// const appDiv = document.getElementById("app");
// render(<App />, appDiv);


import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <HomePage></HomePage> */}
        <h1>hello from app.js</h1>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
const reactRoot = createRoot(appDiv);
reactRoot.render(<App />, appDiv);
