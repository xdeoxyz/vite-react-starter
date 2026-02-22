import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type ErrorBoundaryProps = {
  children?: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null })
  }

  fallback = () => {
    return (
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle>Something went wrong</CardTitle>
          <CardDescription>An unexpected error occurred</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <p className='text-sm text-muted-foreground'>{this.state.error?.message || 'An unexpected error occurred'}</p>
          <Button onClick={this.handleReset}>Try again</Button>
        </CardContent>
      </Card>
    )
  }

  render(): ReactNode {
    return this.state.hasError ? <this.fallback /> : this.props.children
  }
}

export { ErrorBoundary }
