"use client";

import React from "react";
import Navbar from "./Navbar";

const Container = ({ children }) => {
  return (
    <div className="w-full h-full">
        <Navbar/>
      {children}
    </div>
  );
};

export default Container;
