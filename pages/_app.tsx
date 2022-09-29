import '@/styles/index.scss'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { Nprogress, Seo, PreLoader } from '@/shared'
// import PreLoader from '@/components/preLoader/PreLoader'
import Script from 'next/script'
import { AppProvider } from '@/contexts/AppContext'
// import { PageLoader } from '@/shared/loaders'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    const load = setTimeout(() => setIsLoading(false), 2000)
    return () => {
      clearTimeout(load)
    }
  }, [])
  return getLayout(
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <AppProvider>
        <Seo />
        <Nprogress />
        {!isLoading ? (
          <React.Fragment>
            <Component {...pageProps} />
          </React.Fragment>
        ) : (
          <PreLoader />
        )}
      </AppProvider>
    </>,
  )
}

export default MyApp
