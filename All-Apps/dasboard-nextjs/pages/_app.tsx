import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import { AuthProvider } from '../providers/AuthProvider'
import { NextComponentType, NextPageContext } from 'next'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TicketsStatesProvider } from '../providers/TicketsStatesProvider'
import ErrorBoundary from '../components/ErrorBoundaries'
import Head from 'next/head'

const queryClient = new QueryClient()

type AppProps = {
  pageProps: any
  Component: NextComponentType<NextPageContext, {}> & {
    auth: boolean
    title: string
    roles: string[]
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Head>
          <title>{Component.title}</title>
          <meta property='og:title' content='My page title' key='title' />
        </Head>
        <AuthProvider auth={Component.auth}>
          <TicketsStatesProvider>
            {Component.auth ? (
              <div className='layout'>
                <SideBar />
                <div></div>
                <div className='content'>
                  <Header />
                  <Component {...pageProps} />
                  <Footer />
                </div>
              </div>
            ) : (
              <Component {...pageProps} />
            )}
          </TicketsStatesProvider>
        </AuthProvider>
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
export default MyApp
