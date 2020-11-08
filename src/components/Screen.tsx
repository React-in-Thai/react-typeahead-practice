import React from 'react'

const Screen = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="w-full max-w-sm mx-auto h-screen overflow-scroll bg-white">
      {children}
    </div>
  )
}

export default Screen
