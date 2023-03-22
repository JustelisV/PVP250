import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/MyMap";


const App = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      
    ]);
    return routes;
};


const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
    
  );
};

export default AppWrapper;