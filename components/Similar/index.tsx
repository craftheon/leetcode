import React from 'react'
import Link from 'next/link'

interface Similar {
  title: string;
  slug: string;
  difficulty: string
}
export interface SimilarProps {
  data: Similar[]

}

export default function Similar({ data }: SimilarProps) {
  return (
    <>
      <h2 className='nx-mt-8 nx-text-2xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100'>Similar Questions</h2>
      <ul className=''>
        {data.map(e => <li className='nx-list-disc nx-text-primary-600 dark:nx-text-primary-400 nx-ml-4 nx-mt-2'><Link key={e.slug} href={`/solutions/${e.slug}`}>{e.title}</Link></li>)}
      </ul>
    </>
  )
}