import React from 'react'

const MapLocation = () => {
  return (
    <div className="parent-wrap flex flex-col px-3">
      <div className="flex justify-between">
        <h3 className="sectionheader text-pjgreen">Map Location</h3>
      </div>
      <div className="w-full h-[60vh] shadow-xl mt-10 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7929.028516713118!2d3.343455!3d6.456334000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bdea460eb5b%3A0x922e90f452412179!2s1%20Baale%20St%2C%20Ajegunle%2C%20Lagos%20102103%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1736870002346!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default MapLocation