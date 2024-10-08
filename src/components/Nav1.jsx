import React from "react";
import Nav1icons from "./Nav1icons";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

const Nav1 = () => {
  const nav1Data = [
    { info: " sales@thinktiveit.com ", logo: <MdEmail /> },
    { info: " (404) 947-8771", logo: <IoIosCall /> },
    {
      info: " 348 Elkins Place, Peachtree City, GA 30269",
      logo: <IoLocation />,
    },
  ];

  return (
    <>
      <nav className="flex items-center justify-between bg-blue-800 text-white px-5 py-3">
        <div className="flex gap-5 ">
          {nav1Data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="text-xl">{item.logo}</div>
              <h1>{item.info}</h1>
            </div>
          ))}
        </div>
        <div >
          <Nav1icons />
        </div>
      </nav>
    </>
  );
};

export default Nav1;
