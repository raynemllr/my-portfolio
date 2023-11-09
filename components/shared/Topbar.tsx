"use client";

import Link from "next/link";

function Topbar() {
  const pageUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="topbar">
      <h1 className="logo" onClick={pageUp}>
        rayne.dev
      </h1>
    </nav>
  );
}
export default Topbar;
