// Module imports
import Head from 'next/head'
import Error from 'next/error'
import NProgress from 'nprogress'
import React from 'react'
import Router from 'next/router'





// Local imports
import Banner from './Banner'
import DocsToC from './DocsToC'





NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeError', () => NProgress.done())
Router.events.on('routeChangeComplete', () => NProgress.done())





class AppLayout extends React.Component {
  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  static async getInitialProps ({ Component, ctx }) {
    const {
      asPath,
      isServer,
      query,
    } = ctx

    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    let statusCode = 200

    if (ctx.res) {
      ({ statusCode } = ctx.res)
    }

    return {
      statusCode,
      pageProps: {
        asPath,
        isServer,
        query,
        ...pageProps,
      },
    }
  }

  render () {
    const {
      Component,
      pageProps,
      router,
      statusCode,
    } = this.props

    const isDocsPage = /^\/docs\//giu.test(router.asPath)
    const pageID = pageProps.asPath
      .replace(/^\//u, '')
      .replace('/', '-')

    return (
      <div role="application">
        <Head>
          <link
            href="https://unpkg.com/nes.css@latest/css/nes-core.min.css"
            rel="stylesheet" />

          <link
            href="https://unpkg.com/nes.icons@2.0.1/css/nes-icons.min.css"
            rel="stylesheet" />

          <link
            href={`//fonts.googleapis.com/css?family=${['Press Start 2P'].join('|').replace(/\s/g, '+')}`}
            rel="stylesheet" />
        </Head>

        <Banner path={pageProps.asPath} />

        {(statusCode === 200) && (
          <main id={pageID || 'home'}>

            {!isDocsPage && (
              <Component {...pageProps} />
            )}

            {isDocsPage && (
              <>
                <DocsToC />

                <article className="docs-content">
                  <Component {...pageProps} />
                </article>
              </>
            )}
          </main>
        )}

        {(statusCode !== 200) && (
          <main className="error-page">
            <Error statusCode={statusCode} />
          </main>
        )}
      </div>
    )
  }
}





export default AppLayout
