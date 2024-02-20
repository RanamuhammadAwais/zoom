'use client'
import React from 'react'

function button() {
  const hand=()=>{
    alert("Hello ver")
  }
  return (
    <button onClick={hand} > Click me</button>
  )
}

export default button
