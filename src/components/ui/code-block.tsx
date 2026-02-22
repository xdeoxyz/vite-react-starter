import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const variants = cva('relative overflow-hidden rounded-lg border bg-muted font-mono text-sm shadow-sm', {
  variants: {
    variant: {
      default: 'border-border/50',
      destructive: 'border-destructive/50 text-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface CodeBlockProps extends React.ComponentProps<'figure'>, VariantProps<typeof variants> {
  code: string
  language?: string
  showLineNumbers?: boolean
  filename?: string
}

const CodeBlock = ({ className, variant = 'default', code, language, showLineNumbers = false, filename, ...props }: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false)
  const lines = code.split(/\n/g)

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore
    }
  }

  return (
    <figure className={cn(variants({ variant }), className)} {...props}>
      {(filename || language) && (
        <figcaption className='flex items-center gap-2 border-b border-border/50 px-4 py-2 [&>span]:text-muted-foreground'>
          {language && <span>{language}</span>}
          {filename && language && <span className='select-none'>·</span>}
          {filename && <span>{filename}</span>}
        </figcaption>
      )}
      <div className='group relative flex'>
        <div className='flex-1 overflow-hidden'>
          <pre className='no-scrollbar overflow-auto p-4 text-left outline-none' translate='no'>
            <code>
              {lines.map((line, index) => (
                <span key={index} className='table-row'>
                  {showLineNumbers && <span className='table-cell pr-6 text-right text-muted-foreground/50 select-none'>{index + 1}</span>}
                  <span className='table-cell'>{line}</span>
                </span>
              ))}
            </code>
          </pre>
        </div>
        <Button onClick={handleCopy} variant='ghost' size='icon' className={cn('absolute top-2 right-2 size-8 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 hover:border-border hover:bg-muted dark:hover:bg-muted', copied && 'pointer-events-none')} aria-label='Copy code'>
          {copied ? <Check /> : <Copy />}
        </Button>
      </div>
    </figure>
  )
}

export { CodeBlock }
