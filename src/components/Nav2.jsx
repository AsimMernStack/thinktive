import React from "react";

function Nav2() {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Services",
      link: "https://thinktiveit.com/services/",
    },
    {
      name: "Pricing",
      link: "https://thinktiveit.com/pricing/",
    },
    {
      name: "Case Studies",
      link: "https://thinktiveit.com/case-studies/",
    },
    {
      name: "About Us",
      link: "https://thinktiveit.com/about/",
    },
    {
      name: "Blog",
      link: "https://thinktiveit.com/blog/",
    },
    {
      name: "Contact Us",
      link: "https://thinktiveit.com/contact/",
    },
  ];

  return (
    <div className="flex items-center justify-between px-5 bg-white  text-white sticky top-0 z-10 ">

      
      <div>
        <img
          className="w-52"
          src="https://thinktiveit.com/wp-content/uploads/2023/11/Screen-Shot-2023-11-10-at-3.58.35-AM-e1703109771336.png"
          alt=""
        />
      </div>



      <div className=" bg-slate-200 px-6 py-2 rounded-lg ">
        <ul className="flex items-center gap-12 text-black text-xl ">
          {links.map((item, index) => (
            <li key={index} className="transition duration-200 hover:duration-200 hover:scale-110 hover:bg-blue-800 hover:text-white px-2 py-1 rounded-xl">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>



      <a
        href="https://thinktiveit.com/letsgetstarted/"
        className="animate-pulse  uppercase bg-blue-800 px-8 py-2 rounded-3xl text-lg font-semibold transition duration-200 hover:duration-200 hover:scale-110 hover:bg-[#FF0000]"
      >
        let's get started
      </a>


    </div>
  );
}

export default Nav2;
