import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
      This is setting page
      <div>
      <Link href='/dashboard/settings/password' className='text-red-500 font-bold'> Password</Link>
      
      </div>
    </div>
  )
}

export default page
