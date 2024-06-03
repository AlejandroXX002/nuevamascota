import React from "react";
import Link from "next/link";
import PetProfile from "./[petProfile]/page";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <PetProfile />
    </div>
  );
}
