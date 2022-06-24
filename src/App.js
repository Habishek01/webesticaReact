import "./App.css";
import NavBar from "./NavBar";
import LeftContainer from "./LeftContainer";
import MiddleContainer from "./MiddleContainer";
import RightContainer from "./RightContainer";

function App() {
  return (
    <div className="App">
      <div className="totalArea">
        <NavBar />
        <div className="container">
          <LeftContainer />
          <MiddleContainer />
          <RightContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
