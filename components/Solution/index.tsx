import React from 'react'

export interface SolutionProps {
  slug: string;
  children: React.ReactNode
}

export default function Solution({ slug, children }: SolutionProps) {
  return (
    <>
      <h2 className='nx-mt-2 nx-text-3xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100'>Solution</h2>
      {children}
    </>
  )
}