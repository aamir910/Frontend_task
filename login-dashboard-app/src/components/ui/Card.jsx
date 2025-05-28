import React from 'react'

function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

export { Card }   