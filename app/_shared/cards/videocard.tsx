import Image from 'next/image';
import cardImg from "../../../public/static/image/cardimg1.png";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
const VideoCard = ({img,paragraph,title, h1 }: { img:string,title?:string,paragraph:string,h1?: boolean }) => {
  return (
    <div className="w-full md:w-full lg:w-full">
      <div className="w-full h-[17rem] md:h-[21rem] overflow-hidden rounded-xl">
        <iframe
          width="100%"
          height="100%"
          src={img}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-5">
        <p className={`text-[1.5rem] ${!h1 && "hidden"}`}>{title}</p>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default VideoCard