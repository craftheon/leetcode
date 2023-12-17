import React from 'react'
import Link from 'next/link'

interface Tag {
  name: string;
  slug: string
}
export interface ProblemProps {
  id: string;
  slug: string;
  title: string;
  difficulty: string;
  tags: Tag[];
  children: React.ReactNode
}

export default function Problem({ id, difficulty, title, tags, slug, children }: ProblemProps) {
  const diffMap = {
    Easy: <span className='nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10'>{difficulty}</span>,
    Medium: <span className='nx-border-orange nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-orange nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-orange/10 dark:nx-bg-orange/10'>{difficulty}</span>,
    Hard: <span className='nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10'>{difficulty}</span>
  }
  return (
    <>
      <h1 className='nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-500 dark:nx-text-slate-100'>{title}</h1>
      <span className='nx-text-sm'><span className='nx-font-bold nx-mr-1'>Difficulty: </span>{diffMap[difficulty]}</span>
      <span className='nx-text-sm nx-ml-4'>
        <span className='nx-font-bold nx-mr-1'>Topic: </span>
        {
          tags.map(e => (<Link key={e.slug} href={`/topics/${e.slug}`} className='nx-border-black nx-mr-2 nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10'>{e.name}</Link>))
        }
      </span>
      <span className='nx-mt-2 nx-text-sm nx-ml-2'><span className='nx-font-bold nx-mr-2'>Leetcode:</span><a className='nx-text-primary-600 dark:nx-text-primary-400 nx-font-bold' target='_blank' href={`https://leetcode.com/problems/${slug}`}>{id}.{title}</a></span>
      <div className='code nx-mt-5 nx-text-sm'>
        {children}
      </div>
    </>
  )
}
