import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";


const App = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/Registration", element: <Registration /> }
      
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