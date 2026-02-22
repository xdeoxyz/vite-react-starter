import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ThemeProvider } from '@/theme/provider'
import { ErrorBoundary } from '@/components/error-boundary'
import { Toaster } from '@/components/ui/sonner'
import { ThemeToggle } from '@/theme/toggle'

const HomePage = lazy(() => import('@/pages/home'))
const LoginPage = lazy(() => import('@/pages/login'))
const NotFoundPage = lazy(() => import('@/pages/not-found'))
const LoadingFallback = () => <div className='h-8 w-8 animate-spin rounded-full border-b-4 border-primary' />

const App = () => {
  return (
    <ThemeProvider defaultTheme='system' storageKey='ui-theme'>
      <BrowserRouter>
        <div className='relative flex min-h-svh w-full items-center justify-center px-6 py-8 md:px-12 md:py-16'>
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
              <div className='absolute top-4 right-4'>
                <ThemeToggle />
              </div>
            </Suspense>
            <Toaster />
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
