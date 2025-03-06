import React from 'react'
import { Videos } from '../../helpers/constants';
import VideoCard from '../_shared/cards/videocard';

export default function page() {
  return (
    <div className="parent-wrap mt-28">
      <h3 className="sectionheader text-pjgreen">Our Videos</h3>
      <div className="grid xs grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Videos?.map((video, index) => (
          <VideoCard img={video.video} paragraph={video.title} key={index} />
        ))}
        <div className="w-full md:w-full lg:w-full">
          <div className="w-full h-[17rem] md:h-[21rem] overflow-hidden rounded-xl">
            <video
              controls
              src="https://res.cloudinary.com/dwo3dj2d7/video/upload/v1740344232/AjegunleSportsdoc_nnhkia.mp4"
              className="w-full h-full"
            />
          </div>
          <div className="mt-5">
            
            <p>CONSTRUCTION OF THE 5-ASIDE ASTRO TURF & BASKETBALL PITCH</p>
          </div>
        </div>
      </div>
    </div>
  );
}
