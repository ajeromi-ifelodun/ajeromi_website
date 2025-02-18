import React from 'react'
import { Videos } from '../../helpers/constants';
import VideoCard from '../_shared/cards/videocard';

export default function page() {
  return (
    <div className="parent-wrap">
      <h3 className="sectionHeader">Our Videos</h3>
      <div className="grid xs grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Videos?.map((video, index) => (
          <VideoCard img={video.video} paragraph={video.title} key={index} />
        ))}
      </div>
    </div>
  );
}
