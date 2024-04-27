import React from "react";
import { Route, Routes } from "react-router";
import App from "./App";
import AllProject from "./AllProject";


const Routing = () => {
  return (
        <>
            <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/allProject" element={<AllProject/>}/>
            </Routes>
    </>
  );
};

export default Routing;
