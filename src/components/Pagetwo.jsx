import React from "react";

function Pagetwo() {
  return (
    <div className="w-full h-screen bg-slate-50 relative">
      <div className="text-center py-10 ">
        <h1 className="text-red-500 text-2xl font-semibold">How We Can Help</h1>
        <h1 className="text-blue-800 text-3xl font-bold capitalize">
          web design and development
        </h1>
        <h1 className="text-blue-800 text-2xl font-semibold">
          Our Website Development services
        </h1>
      </div>

      <img
        className="absolute left-[50%] translate-x-[-50%] "
        src="https://thinktiveit.com/wp-content/uploads/2019/12/man_with_laptop.png"
        width="250vw"
      />

      <div className="flex items-center justify-center gap-80">
        <div className="flex flex-col gap-20">
          <a href="https://thinktiveit.com/letsgetstarta" className="flex hover:bg-slate-100 p-5 rounded-xl items-center gap-5">
            <div>
              <h1 className="text-blue-600 text-xl font-semibold">
                Website Design from Start
              </h1>
              <p className="w-80">
                To build a website form the start we will help you
              </p>
            </div>
            <img
              width="100px"
              src="https://thinktiveit.com/wp-content/uploads/2024/01/Website-Design-from-Start-168x168.png"
            />
          </a>
          <a href="https://thinktiveit.com/letsgetstarted/" className="flex hover:bg-slate-100 p-5 rounded-xl items-center gap-5">
            <div>
              <h1 className="text-blue-600 text-xl font-semibold">
                Informative Website
              </h1>
              <p className="w-80">
                Get a strong online presence with increased inbound leads
              </p>
            </div>
            <img
              width="100px"
              src="https://thinktiveit.com/wp-content/uploads/2024/01/Informative-Corporate-Website-168x168.png"
            />
          </a>
        </div>
        <div className="flex flex-col gap-20">
          <a href="https://thinktiveit.com/letsgetstarted/" className="flex hover:bg-slate-100 p-5 rounded-xl items-center gap-5">
            <div>
              <h1 className="text-blue-600 text-xl font-semibold">
                Ecommerce Website
              </h1>
              <p className="w-80">
                Sell product online & connect to popular online marketplace with access to robust and reliable features
              </p>
            </div>
            <img
              width="100px"
              src="https://thinktiveit.com/wp-content/uploads/2024/01/Ecommerce-Website-168x168.png"
            />
          </a>
          <a href="https://thinktiveit.com/letsgetstarted/" className="flex hover:bg-slate-100 p-5 rounded-xl  items-center gap-5">
            <div>
              <h1 className="text-blue-600 text-xl font-semibold">
                Website Redesign and Maintenance 
              </h1>
              <p className="w-80">
                Renew and upgrade your web-based presence with revamp and update
              </p>
            </div>
            <img
              width="100px"
              src="https://thinktiveit.com/wp-content/uploads/2024/01/Website-Redesign-168x168.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pagetwo;
