import React from "react";

function Footerhead1() {
  const data = [
    {
      option: "Home",
      links:"/"
    },
    {
      option: "About Us",
      links:'https://thinktiveit.com/about/'
    },
    {
      option: "Let's Get Started",
      links:''
    },
    {
      option: "Our Team",
      links:'https://thinktiveit.com/letsgetstarted/'
    },
    {
      option: "Case Studies",
      links:'https://thinktiveit.com/case-studies/'
    },
    {
      option: "Blog",
      links:'https://thinktiveit.com/blog/'
    },
    {
      option: "Contact Us",
      links:'https://thinktiveit.com/contact/'
    },
  ];

  return (
    
      <div>
        <h1 className="text-3xl font-bold">Quick Links</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index} className="py-2 text-lg font-semibold">
              <a href={item.links}>{item.option}</a>
            </li>
          ))}
        </ul>
      </div>
    
  );
}

export default Footerhead1;
