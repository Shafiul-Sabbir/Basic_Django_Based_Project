// import React, { Component } from "react";

// export default class RoomJoinPage extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <p>This is the room join page</p>;
//   }
// }


import React, { Component } from "react";
import { createRoot } from "react-dom/client";

class RoomJoinPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>This is the room join page</p>;
  }
}

const roomJoinDiv = document.getElementById("room-join"); // Assuming you have an element with id "room-join" in your HTML
const reactRoot = createRoot(roomJoinDiv);
reactRoot.render(<RoomJoinPage />);

export default RoomJoinPage;
