import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const NotFoundPage = () => {
  return (
    <div className='w-full max-w-md'>
      <Card>
        <CardHeader>
          <CardTitle>404</CardTitle>
          <CardDescription>Page not found</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
          <p className='text-sm text-muted-foreground'>The page you are looking for does not exist.</p>
          <Button asChild>
            <Link to='/'>Go Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default NotFoundPage
