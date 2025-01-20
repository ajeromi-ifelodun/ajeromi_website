import Image from 'next/image';
import cardImg from "../../../public/static/image/cardimg1.png";
const Exectcard = ({ h1 }: { h1?: boolean }) => {
  return (
    <div className="w-[22rem] md:w-[28rem] lg:w-[38rem]">
      <div className="w-full h-[17rem] md:h-[21rem] overflow-hidden rounded-xl">
        <Image
          src={cardImg}
          alt="cardimg1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="mt-5">
        <p className={`text-[1.5rem] ${!h1 && "hidden"}`}>
          Hon. Fatai Adekule Ayoola
        </p>
        <p>Executive Chairman, Ajeromi-Ifelodun LGA</p>
      </div>
    </div>
  );
};

export default Exectcard