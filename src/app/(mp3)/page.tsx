// import MusicDiscovery from "@/components/musicDiscoveryr";
"use client";
import MusicDiscovery from "@/src/components/musicDiscoveryr";

async function getData() {
  const res = await fetch("http://localhost:3001/user");
  return res.json();
}
export default function HomePage() {
  return (
    <div className="color">
      <MusicDiscovery />
    </div>
  );
}
