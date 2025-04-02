import { useState, useEffect } from "react";

const Controls = ({ onUpdate }) => {
  const [settings, setSettings] = useState({
    curve: 0.5,
    distance: 2,
    yHeight: 0,
    grid: true,
    ambientLight: 0.5,
  });

 
  useEffect(() => {
    onUpdate(settings);
  }, [settings, onUpdate]);

  const updateSettings = (field, value) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="controls">
      <label>
        Curve:
        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={settings.curve}
          onChange={(e) => updateSettings("curve", Number(e.target.value))}
        />
      </label>
      <label>
        Distance:
        <input
          type="range"
          min="-5"
          max="5"
          step="0.1"
          value={settings.distance}
          onChange={(e) => updateSettings("distance", Number(e.target.value))}
        />
      </label>
      <label>
        Y Height:
        <input
          type="range"
          min="-5"
          max="5"
          step="0.1"
          value={settings.yHeight}
          onChange={(e) => updateSettings("yHeight", Number(e.target.value))}
        />
      </label>
      <label>
        Grid:
        <input
          type="checkbox"
          checked={settings.grid}
          onChange={(e) => updateSettings("grid", e.target.checked)}
        />
      </label>
      <label>
        Ambient Light:
        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={settings.ambientLight}
          onChange={(e) => updateSettings("ambientLight", Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Controls;
