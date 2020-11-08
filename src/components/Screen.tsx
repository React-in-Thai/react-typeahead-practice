import React from 'react'

const Screen = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="w-full max-w-sm mx-auto min-h-screen bg-white">
      {children}
    </div>
  )
}

export default Screen
