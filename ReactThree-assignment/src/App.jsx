import { useState } from "react";
import Scene from "./components/Scene";
import Controls from "./components/Controls";
import ARView from "./components/ARView";

const App = () => {
  const [settings, setSettings] = useState({
    curve: 0.5,
    distance: 2,
    yHeight: 0,
    grid: true,
    ambientLight: 0.5,
  });

  return (
    <div className="app">
      <Scene settings={settings} />
      <Controls onUpdate={setSettings} />
      {/* <ARView settings={settings} /> */}
    </div>
  );
};

export default App;
