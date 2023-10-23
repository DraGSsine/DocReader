import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

function MaxWidthWrapper({
    className,
    children
}:{
    className?:string
    children:ReactNode
}
) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-2.5 md:px-20',className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper