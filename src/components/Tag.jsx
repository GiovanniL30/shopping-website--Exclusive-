import React from 'react'

const Tag = ({ color, text }) => {
  return (
    <div
      className={`bg-${color} z-10 text-white rounded absolute py-1 px-3 text-sm top-3 left-3`}
    >
      {text}
    </div>
  )
}

export default Tag
