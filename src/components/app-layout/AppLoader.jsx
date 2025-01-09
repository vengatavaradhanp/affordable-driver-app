import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

export default function AppLoader(props) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        zIndex: 9999,
      }}
    >
      <CirclesWithBar
        height="100"
        width="100"
        color="#2b9348"
        outerCircleColor="#2b9348"
        innerCircleColor="#2b9348"
        barColor="#2b9348"
        ariaLabel="circles-with-bar-loading"
        wrapperClass=""
        visible
      />
    </div>
  );
}
