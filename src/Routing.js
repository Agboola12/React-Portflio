import React from "react";
import { Route, Routes } from "react-router";


const Routing = () => {
  return (
        <>
            <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/loginsuccess" element={<LoginSucess/>}/>
            </Routes>
    </>
  );
};

export default Routing;
