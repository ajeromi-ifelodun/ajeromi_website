import React from 'react'
import { Rightarrow } from '../_shared/icons/icons';
import Exectcard from '../_shared/cards/exectcard';
import Latestcards from '../_shared/cards/latestcards';
import Link from 'next/link';

const Latest = () => {
  return (
    <div className="parent-wrap flex flex-col ">
      <div className="flex justify-between">
        <h3 className="sectionheader text-pjgreen">Latest news</h3>
        <Link href={"/newsevents"} className="flex items-center gap-2">
          <p className="text-pjgreen text-[1.5rem] ">see all</p> <Rightarrow />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-10 justify-items-center row-span-9 justify-center sm:grid-cols-2 md:grid md:grid-cols-3 lg:flex lg:justify-between mt-10">
        <Latestcards />
        <Latestcards />
        <Latestcards />
        <Latestcards />
      </div>
    </div>
  );
}

export default Latest