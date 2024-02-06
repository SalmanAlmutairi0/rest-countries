import React from "react";
import loadingImg from "../../assets/loading-circle.png";
export default function LoadingScreen() {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-slate-600 bg-opacity-50">
      <img src={loadingImg} alt="loading" className="h-20 w-20 animate-spin " />
    </div>
  );
}
