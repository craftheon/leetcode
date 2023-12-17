import React from 'react'

export interface ProblemProps {
  slug: string;
  title: string;
  children: React.ReactNode
}

export default function Problem({ slug, title, children }: ProblemProps) {
  return (
    <>
      <h1 className='nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100'>{title}</h1>
      {children}
    </>
  )
}