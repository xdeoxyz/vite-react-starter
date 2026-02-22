import { Link } from 'react-router'
import { ArrowRight, Code2, Palette, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CodeBlock } from '@/components/ui/code-block'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built on Vite 7 with instant HMR and optimized production builds.',
  },
  {
    icon: Code2,
    title: 'TypeScript Ready',
    description: 'Full type safety with strict mode and ES2022 target.',
  },
  {
    icon: Palette,
    title: 'Beautiful UI',
    description: 'shadcn/ui components with Tailwind CSS 4 styling.',
  },
  {
    icon: Shield,
    title: 'Form Validation',
    description: 'React Hook Form + Zod for robust form handling.',
  },
]

const HomePage = () => {
  return (
    <div className='flex w-full max-w-4xl flex-col items-center gap-16'>
      <div className='flex w-full flex-col items-center gap-8'>
        <div className='flex flex-col items-center gap-4 text-center'>
          <h1 className='text-4xl font-extrabold tracking-tight md:text-5xl'>React + TypeScript + Vite</h1>
          <p className='max-w-2xl text-base text-muted-foreground md:text-xl'>A modern starter pack with shadcn/ui, Tailwind CSS 4, React Router 7, and more.</p>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-4'>
          <Button asChild size='lg'>
            <Link to='/login'>
              Get Started <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant='outline' size='lg'>
            <a href='https://vite.dev' target='_blank' rel='noreferrer'>
              Documentation
            </a>
          </Button>
        </div>
      </div>

      <div className='grid w-full gap-6 sm:grid-cols-2'>
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <div className='mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10'>
                <feature.icon className='size-5 text-primary' />
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className='flex w-full flex-col items-center gap-4 rounded-lg bg-card p-8 text-center'>
        <h2 className='text-2xl font-bold'>Quick Start</h2>
        <CodeBlock className='w-full max-w-md' code={`# Install dependencies\nnpm install\n# Start development\nnpm run dev`} />
        <p className='text-sm text-muted-foreground'>
          Run <code className='code text-primary'>npm run build</code> for production
        </p>
      </div>
    </div>
  )
}

export default HomePage
