import React from "react";

import NavBar from "./NavBar";
import GiftListContainer from "./GifListContainer";

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GiftListContainer/>
    </div>
  );
}

export default App;
// import React from "react";
// import NavBar from "./NavBar";
// import GifListContainer from "./GifListContainer";

// function App() {
//   return (
//     <div>
//       <NavBar color="black" title="Giphy Search" />
//       <GifListContainer />
//     </div>
//   );
// }

// export default App;
