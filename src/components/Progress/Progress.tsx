"use client";
import React from "react";

const Progress = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-primary-200/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-primary-200 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Progress;
