import Navbar from "@/components/Navbar";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
    <Navbar label="Home"/>
    <div className="p-4">
      <Works/>
      <Works/>
      <Works/>
      <Works/>
      <Works/>
      <Works/>
      <Works/>
    </div>
    </>
  )
}
