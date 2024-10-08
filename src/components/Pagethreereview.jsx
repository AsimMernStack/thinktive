import React from "react";

function Pagethreereview() {

    const cardsdata = [
    {
        photo:'https://lh3.googleusercontent.com/a/ACg8ocIAVR4OEbJ6uaQDzg-eCmiGA0WoSx-f3I7K_Rzd343MLidezA=w40-h40-c-rp-mo-br100',
        name:'N C',
        date:'2024-08-22',
        content:" I contacted Thinktive to fix issues on my website caused by my previous developer. The team took the time to understand my situation and guided me through every step. They kept me informed throughout the process, making everything smooth and stress-free. I’m very happy with their work and highly recommend Thinktive for anyone needing reliable website solutions. 👍🏻👍🏻👍🏻 "
    },
    {
        photo:'https://lh3.googleusercontent.com/a/ACg8ocLrxVAiAlU9hXmI3Ybsu8gBKPPAAcrI3HT9Q677uxJL9d-mIA=w40-h40-c-rp-mo-br100',
        name:'Marisa Miller',
        date:'2024-07-30',
        content:"Thinktive IT Solution redesigned our website, and we're thrilled with the results. They handled everything from design to SEO, and since launching, we've seen a significant increase in traffic and engagement. Communication was smooth, and the project was delivered on time and within budget. If you need a reliable web design and development partner, I highly recommend Thinktive. Their expertise and dedication to quality are outstanding."
    },
    {
        photo:'https://lh3.googleusercontent.com/a-/ALV-UjUZkfjy4ZuqbxUgsSt9EQ4PTyWzAmBJxUVD_SnnNAHl_lM34HzA=w40-h40-c-rp-mo-br100',
        name:'Mon P.',
        date:'2024-02-11',
        content:"I recently worked with Thinktive IT Solution, and my experience was positive overall. Their team demonstrated excellent communication throughout the project, keeping me informed at every stage. The developers showcased strong technical expertise, delivering a website that not only met but exceeded my expectations. The portfolio displayed a variety of successful projects, highlighting their versatility. However, there were a few instances where deadlines were narrowly met. Despite this, the responsive customer service and the quality of the final product make Thinktive IT Solution a reliable choice for web development needs. "
    },
    {
        photo:'https://lh3.googleusercontent.com/a-/ALV-UjXJrqeo4Y9Zxp-XfRKdVEHzB2rxv9HNBZDNnMKchRW7flrOs18=w40-h40-c-rp-mo-br100',
        name:'Allison Reich',
        date:'2024-02-08',
        content:"Very helpful into getting what I needed! Will keep using Thinktive!!! Thanks again so much!!! A+"
    },
    ]




  return (
    <div className=" w-full flex gap-5">
      

      {cardsdata.map((item,index)=>(
        <div key={index} className= "card bg-white rounded-lg  w-72 h-auto p-3  border-2 transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-102  duration-200 ">
        <div className="head  p-2 flex items-center  gap-4">
            <div className="">
                <img src={item.photo} className="w-10" />
            </div>

          <div>
            <h1 className="font-semibold" >{item.name}</h1>
            <p className="text-xs text-gray-400">{item.date}</p>
          </div>
          <img
            src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
            className="w-7 ml-20"
          />
        </div>

        <div className="flex items-center p-3">
            <span><img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" className="w-4" /></span>
            <span><img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" className="w-4" /></span>
            <span><img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" className="w-4" /></span>
            <span><img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" className="w-4" /></span>
            <span><img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" className="w-4" /></span>
            <span><img src="https://media.istockphoto.com/id/1396933001/vector/vector-blue-verified-badge.jpg?s=612x612&w=0&k=20&c=aBJ2JAzbOfQpv2OCSr0k8kYe0XHutOGBAJuVjvWvPrQ=" className="w-5"/></span>
        </div>

        <div className="content p-2">
            <p>{item.content}</p>
        </div>
      </div>
      ))}
      
      
    </div>
  );
}

export default Pagethreereview;
