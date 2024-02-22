import React from 'react'
import Image from 'next/image'

function Not() {
  return (
    <div className='flex justify-center'>
       < Image src={'https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280'}
        width={400}
        height={200}
        alt="Image"
        className="border-4  border-orange-500 p-2 m-5 ">

        </Image>
    </div>
  )
}

export default Not
