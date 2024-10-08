import React from 'react'

function Footerhead2() {

    const data2 = [
        {
            links:'https://thinktiveit.com/website-development/',
            option:'Website Development'
        },
        {
            links:'https://thinktiveit.com/services/',
            option:'Services'
        },
        {
            links:'https://thinktiveit.com/graphic-design-and-brandings/',
            option:'Graphic Design '
        },
        {
            links:'https://thinktiveit.com/mobile-app-design-and-development/',
            option:'Mobile Application'
        },
        {
            links:'https://thinktiveit.com/seo-services/',
            option:'SEO'
        },
    ]

  return (
    <div>
        <h1 className="text-3xl font-bold">Services</h1>
        <ul>
          {data2.map((item, index) => (
            <li key={index} className="py-2 text-lg font-semibold">
              <a href={item.links}>{item.option}</a>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Footerhead2