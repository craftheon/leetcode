import problems from '../../data/problems.json'

export interface ProblemProps {
  slug: string
}

export default function Problem({ slug }: ProblemProps) {
  const problem = problems.filter(e => e.slug === slug)[0]
  return (
    <>
      <h1 className='nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100'>{problem.title}</h1>

    </>
  )
}