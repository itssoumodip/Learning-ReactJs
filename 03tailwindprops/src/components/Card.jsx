import React from 'react'

function Card({username,btnText="VISIT ME"}) {

  // console.log("props", props)
  console.log(username)

  return (
    <div className="relative h-[400px] w-[300px] rounded-md m-4">
      <img
        src="https://img.freepik.com/free-photo/full-shot-ninja-wearing-equipment_23-2150960979.jpg?t=st=1726467879~exp=1726471479~hmac=8e74f382eb2040df389085cacc2be333ea25cf9e14b377895b783b25ef6e7b21&w=1060&amp;fit=crop&amp;w=800&amp;q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      /> 
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText} →
        </button>
      </div>
    </div>
  )
}

export default Card
