import MusicDiscovery from "@/components/musicDiscoveryr";

async function getData() {
  const res = await fetch("http://localhost:3001/user");
  return res.json();
}
export default async function HomePage() {
  const data = await getData();
  console.log(data);
  return (
    <div className="color">
      <MusicDiscovery />
    </div>
  );
}
