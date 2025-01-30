import React from 'react'
import { Rightarrow } from '../_shared/icons/icons';
import Exectcard from '../_shared/cards/exectcard';
import Latestcards from '../_shared/cards/latestcards';
import Link from 'next/link';
import news1 from "../../public/static/image/news1.png"
import news2 from "../../public/static/image/news2.png"
import news3 from "../../public/static/image/news3.png"
import news4 from "../../public/static/image/news4.png"
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
        <Latestcards
          img={news1}
          date="Nov 29, 2024"
          title="Empowering the Future: Hon Ayoola to Transform Lives"
          paragraph="Hon. Fatai Adekunle Ayoola is the Executive Chairman of Ajeromi-Ifelodun Local Government Area (LGA) in Lagos State, Nigeria, and a member of the All Progressives Congress (APC). "
        />
        <Latestcards
          img={news2}
          date="Nov 29, 2024"
          title="Empowering Women,              Transforming Communities:"
          paragraph="Hon. Fatai Adekunle Ayoola is the Executive Chairman of Ajeromi-Ifelodun Local Government Area (LGA) in Lagos State, Nigeria, and a member of the All Progressives Congress (APC). "
        />
        <Latestcards
          img={news3}
          date="Nov 29, 2024"
          title="Empowering the Future: Hon Ayoola to Transform Lives"
          paragraph="Hon. Fatai Adekunle Ayoola is the Executive Chairman of Ajeromi-Ifelodun Local Government Area (LGA) in Lagos State, Nigeria, and a member of the All Progressives Congress (APC). "
        />
        <Latestcards
          img={news4}
          date="Nov 29, 2024"
          title="Empowering the Future: Hon Ayoola to Transform Lives"
          paragraph="Hon. Fatai Adekunle Ayoola is the Executive Chairman of Ajeromi-Ifelodun Local Government Area (LGA) in Lagos State, Nigeria, and a member of the All Progressives Congress (APC). "
        />
      </div>
    </div>
  );
}

export default Latest