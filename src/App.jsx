import { Outlet } from "react-router-dom";
import "./App.css";
import ParticlesConfig from "./Component/Particales/ParticlesConfig";
import Header2 from "./Component/Header/Header2";

function App() {
  return (
    <div className="text-white md:mx-24">
      <Header2></Header2>
      <Outlet></Outlet>
      <ParticlesConfig></ParticlesConfig>
    </div>
  );
}

export default App;
