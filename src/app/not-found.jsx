import Link from "next/link";
import React from "react";

export default function NotFoundPage404() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div>
        <h1>404 Not Found</h1>
        <h1>
          Go back to <Link className="text-green-600" href={"/"}>home</Link>.
        </h1>
      </div>
    </div>
  );
}
