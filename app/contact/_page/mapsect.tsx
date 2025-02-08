import React from 'react'

const Mapsect = () => {
  return (
    <div className="parent-wrap w-full h-screen flex flex-col md:flex-row py-10">
      <div className="w-full h-[25rem] md:h-auto md:w-1/2 overflow-hidden rounded-2xl">
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
      <div className="pl-10 flex flex-col justify-center font-bold mt-5">
        <p>Our Location</p>
        <h3 className="sectionheader">Where you can find us</h3>
        <p className="font-bold">Headquarters</p>
        <div className="text-greytext mt-5">
          <p>Ajeromi -Ifelodun LGA</p>
          <p>Ajegunle, Lagos</p>
          <p>123 Example Cresent, Suite 342Ajeromi -Ifelodun LGA</p>
        </div>
      </div>
    </div>
  );
}

export default Mapsect