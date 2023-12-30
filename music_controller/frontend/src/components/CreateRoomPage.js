// import React, { Component } from "react";

// export default class CreateRoomPage extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <p>This is the create room page</p>;
//   }
// }

import React, { Component } from "react";
import { createRoot } from "react-dom/client";

class CreateRoomPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>This is the create room page</p>;
  }
}

const createRoomDiv = document.getElementById("create-room"); // Assuming you have an element with id "create-room" in your HTML
const reactRoot = createRoot(createRoomDiv);
reactRoot.render(<CreateRoomPage />);

export default CreateRoomPage;
