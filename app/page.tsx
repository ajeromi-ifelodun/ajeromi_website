import Image from "next/image";
import Herosect from "./_page/herosect";
import OurDeps from "./_page/ourDeps";
import Ourexects from "./_page/ourexect";
import Ourvids from "./_page/ourvids";

export default function Home() {
  return (
    <div className="">
      <Herosect />
      <OurDeps />
      <Ourexects />
      <Ourvids />
    </div>
  );
}
