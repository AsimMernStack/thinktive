import React from "react";
import Form from "./Form";

function Pageone() {
  return (
    <div className="relative ">
      <img
        className="w-full object-cover h-screen"
        src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="absolute top-0 w-full h-screen bg-black/80 flex ">
        <div className="text-white p-5 mt-[10vw] ml-[3vw] w-[50%]">
          <h1 className="text-5xl font-bold m-5">Thinktive IT Solution LLC</h1>
          <p className="w-1/2 text-2xl font-semibold m-5">
            Make your digital first impression count. Our web design and
            development services put your business on the map while sending your
            traffic and conversions soaring.
          </p>

          <div className="btn mt-5">
            <button className="uppercase px-6 py-3 m-2 text-white font-semibold rounded-full bg-blue-800  transition duration-200 hover:duration-200 hover:scale-110 hover:bg-[#FF0000]">
              <a href="https://calendly.com/thinktiveit-pim">
                schedule an online meeting
              </a>
            </button>

            <button className="uppercase px-6 py-3 m-2 text-white font-semibold rounded-full bg-[#FF0000] transition duration-200 hover:duration-200 hover:scale-110 hover:bg-blue-800">
              <a href="https://thinktiveit.com/letsgetstarted/">
                let's get started
              </a>
            </button>
          </div>
        </div>

        <div>
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default Pageone;
