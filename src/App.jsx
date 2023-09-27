import "./App.css";
import Header from "./Component/Header/Header";
import Header2 from "./Component/Header/Header2";
import ParticlesConfig from "./Component/Particales/ParticlesConfig";
import Home from "./Home/Home";

function App() {
  
  return (
    <div className="text-white md:mx-24">
      {/* <Header></Header> */}
      <Home></Home>
      <ParticlesConfig></ParticlesConfig>
    </div>
  );
}

export default App;
