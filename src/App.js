import "./App.css";
import NavBar from "./NavBar";
import LeftContainer from "./LeftContainer";
import MiddleContainer from "./MiddleContainer";
import RightContainer from "./RightContainer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="app">
          <div className="left">
            <LeftContainer />
          </div>
          <div className="middle">
            <MiddleContainer />
          </div>
          <div className="right">
            <RightContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
