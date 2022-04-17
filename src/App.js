import logo from "./logo.svg";
import "./App.css";
import TextForm from "./components/TextForm";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import Alert from "./components/Alert";
import ColorPalette from "./components/ColorPalette";
import About from "./components/About";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App(props) {
  const [mode, setDarkMode] = useState("rose-500");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, color) => {
    setAlert({
      msg: message,
      type: type,
      color: color,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000 * 3);
  };
  const enableDarkMode = () => {
    if (mode == "rose-500") {
      setDarkMode("black");
      document.body.style.backgroundColor = "#27272a";
      showAlert("Dark mode has been enabled", "Success", "green");
    } else {
      setDarkMode("rose-500");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "Warning", "yellow");
    }
  };
  return (
    <>
    <Router>
        <NavBar title="Text Util..." mode={mode} toggleMode={enableDarkMode} />
        <h1
          className={`text-3xl font-bold underline mx-4 text-${
            mode == "rose-500" ? "black" : "white"
          }`}
        >
          Learning React components
        </h1>

        <div className="flex flex-row pt-10">
              <div className="flex flex-col mx-4 w-9/12">
                <Alert alert={alert} />
                <TextForm
                  heading="Enter The Text to Analyze Below"
                  mode={mode}
                  showAlert={showAlert}
                />
              </div>
              <div className="w-2/12">
                <ColorPalette />
              </div>
        </div>
        </Router>
    </>
  );
}

export default App;
