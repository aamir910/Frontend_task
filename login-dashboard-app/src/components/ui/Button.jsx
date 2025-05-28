import React from 'react'

function Button({ children, variant = 'default', size = 'md', className = '', ...props }) {
  let base = 'inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  let variants = {
    default: 'bg-[#4CB7A7] text-white hover:bg-[#399e8c]',
    success: 'bg-[#B6E1C6] text-[#1B5E20] hover:bg-[#a3d6b7]',
    danger: 'bg-[#F7D7D7] text-[#B71C1C] hover:bg-[#f2bcbc]',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  }
  let sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }
  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button } 