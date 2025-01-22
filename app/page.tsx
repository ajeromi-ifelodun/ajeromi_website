import Image from "next/image";
import Herosect from "./_page/herosect";
import OurDeps from "./_page/ourDeps";
import Ourexects from "./_page/ourexect";
import Ourvids from "./_page/ourvids";
import Latest from "./_page/latest";
import MapLocation from "./_page/map";

export default function Home() {
  return (
    <div className="">
      <Herosect />
      <OurDeps />
      <Ourexects />
      <Ourvids />
      <Latest />
      <MapLocation />
    </div>
  );
}
