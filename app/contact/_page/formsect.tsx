import Link from "next/link";
import React from "react";
import {
  Facebookdark,
  Instadark,
  Linkedindark,
  Twitterdark,
  Youtubedark,
} from "../../_shared/icons/icons";
import ContactForm from "../_shared/contactform";

const Formsect = () => {
  return (
    <div className="mt-28 h-[100vh] w-full bg-pjlightgreen flex px-[4rem]">
      <div className="flex flex-col  justify-center w-1/2 gap-10">
        <div>
          <h3 className="sectionheader">Contact Us</h3>
          <p className="pr-14">
            Reach out to us via email, phone, or by completing the form for any
            questions, issues, or inquiries.
          </p>
          <p className="mt-3">info@ajeromiifelodunlga.com</p>
          <p className="mt-3">+2345656565656</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>Social Media</p>
          <aside className="flex gap-5">
            <Link href={""}>
              <Facebookdark />
            </Link>
            <Link href={"instagram.com/ajeromi_lga"}>
              <Instadark />
            </Link>
            <Link href={""}>
              <Twitterdark />
            </Link>
            <Link href={""}>
              <Linkedindark />
            </Link>
            <Link href={""}>
              <Youtubedark />
            </Link>
          </aside>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <ContactForm />
      </div>
    </div>
  );
};

export default Formsect;
