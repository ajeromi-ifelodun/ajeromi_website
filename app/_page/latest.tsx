import React from 'react'
import { Rightarrow } from '../_shared/icons/icons';
import Exectcard from '../_shared/cards/exectcard';
import Latestcards from '../_shared/cards/latestcards';

const Latest = () => {
  return (
    <div className="parent-wrap flex flex-col ">
      <div className="flex justify-between">
        <h3 className="sectionheader text-pjgreen">Latest news</h3>
        <aside className="flex items-center gap-2">
          <p className="text-pjgreen text-[1.5rem] ">see all</p> <Rightarrow />
        </aside>
      </div>
      <div className='flex justify-between mt-10'>
        <Latestcards />
        <Latestcards />
        <Latestcards />
        <Latestcards />
      </div>
    </div>
  );
}

export default Latest