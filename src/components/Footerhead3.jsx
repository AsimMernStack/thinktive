import React from 'react'

function Footerhead3() {

    const data3 = [
        {
            links:'https://thinktiveit.com/privacy-policy-2/',
            option:'Privacy Policy'
        },
        {
            links:'https://thinktiveit.com/terms-conditions/',
            option:'Terms and conditions'
        },
        {
            links:'https://thinktiveit.com/accessibility/',
            option:'Accessibility'
        }
    ]

  return (
    <div >
        <h1 className="text-3xl font-bold">Other Links</h1>
        <ul>
          {data3.map((item, index) => (
            <li key={index} className="py-2 text-lg font-semibold">
              <a href={item.links}>{item.option}</a>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Footerhead3