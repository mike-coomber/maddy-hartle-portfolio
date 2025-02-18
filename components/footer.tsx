import Link from "next/link";
import React from "react";

export default function Footer({ color }: { color?: string }) {
  return (
    <div
      className="flex justify-evenly py-4 border-t border-solid border-black relative z-10"
      style={{ backgroundColor: color }}
    >
      <div className="flex">
        <Link href={"https://www.instagram.com/a.blether/"}>Instagram</Link>
      </div>
      <div className="flex ">
        <Link href={"https://www.linkedin.com/in/maddyhartle/"}>LinkedIn</Link>
      </div>
    </div>
  );
}
