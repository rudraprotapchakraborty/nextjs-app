"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavBar() {
  const pathname = usePathname();
  console.log(pathname, pathname.includes("dashboard"));
  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav className="flex justify-center">
          <ul className="flex justify-between w-1/2">
            <Link href={"/"}>Home</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/about"}>About</Link>
          </ul>
        </nav>
      </div>
    );
  }
}
