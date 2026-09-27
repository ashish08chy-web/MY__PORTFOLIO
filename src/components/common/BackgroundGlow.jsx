import React from "react";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] animate-pulse" />
      <div
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[150px] animate-pulse"
        style={{ animationDuration: "7s" }}
      />
      <div
        className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse"
        style={{ animationDuration: "9s" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0a_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
