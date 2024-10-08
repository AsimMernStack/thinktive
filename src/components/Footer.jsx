import React from "react";
import { HiClock } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Footerhead1 from "./Footerhead1";
import Footerhead2 from "./Footerhead2";
import Footerhead3 from "./Footerhead3";
import Footerlocation from "./Footerlocation";

function Footer() {
  const info = [
    {
      logo: <HiClock />,
      head: "Our office hour: ",
      details: "Monday - Friday : 9:30 AM to 6:30 PM",
    },
    {
      logo: <FaPhoneSquareAlt />,
      head: "Office Number:",
      details: "(404)947-8771",
    },
    {
      logo: <MdMail />,
      head: "Email:",
      details: "sales@thinktiveit.com",
    },
    {
      logo: <FaLocationDot />,
      head: "Address:",
      details: "308 Elkins Place, Peacehtree City,GA 30269",
    },
  ];

  return (
    <div className="   w-full h-[560px] bg-[#061766] text-white p-14">
      <div className="flex justify-center gap-12">
        <div className=" w-96 p-2">
          <img
            className="w-72 mb-5"
            src="https://thinktiveit.com/wp-content/uploads/2021/04/1.png"
            alt="logo"
          />
          <div>
            <h1 className="text-xl font-bold font-mono m-5">
              Contact Information
            </h1>

            <ul>
              {info.map((item, index) => (
                <li className="flex items-center gap-3">
                  {item.logo}
                  <p className="text-lg py-3">
                    <b>{item.head}</b>
                    {item.details}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Footerhead1 />
        <Footerhead2 />
        <Footerhead3 />
        <Footerlocation />
      </div>

      <div className="flex justify-center items-center p-5 border-t-2 ">
        <p>© 2024 Thinktive IT Solution LLC | All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
