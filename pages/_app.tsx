import '@/styles/index.scss'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { Nprogress, Seo, PreLoader } from '@/shared'
// import PreLoader from '@/components/preLoader/PreLoader'
import Script from 'next/script'
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
      <Seo />
      <Nprogress />
      {!isLoading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <PreLoader />
      )}
    </>,
  )
}

export default MyApp
