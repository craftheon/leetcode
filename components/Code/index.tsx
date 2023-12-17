import React from 'react'

export interface CodeProps {
  slug: string;
  children: React.ReactNode
}

export default function Code({ slug, children }: CodeProps) {
  return (
    <>
      {children}
    </>
  )
}