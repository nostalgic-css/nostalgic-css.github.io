// Stylesheet imports
import '../styles/reset.scss'
import '../styles/lib.scss'
import '../styles/app.scss'





// Module imports
import App, { Container } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'





// Local imports
import '../monkeypatch/String'
import AppLayout from '../components/AppLayout'
import CodeBlock from '../components/CodeBlock'

// Local constants
const mdxComponents = {
  code: CodeBlock,
  h2: props => {
    const id = props.children.toLowerCase().replace(/\s/gu, '-').replace(/[^\w-]/gu, '').replace(/-+/gu, '-')

    return (
      <h2 id={id}>
        <a href={`#${id}`}>#</a>
        <span {...props} />
      </h2>
    )
  },
  pre: props => <div {...props} />,
}





class NextApp extends App {
  static getInitialProps (appProps) {
    return AppLayout.getInitialProps(appProps)
  }

  render () {
    return (
      <Container>
        <MDXProvider components={mdxComponents}>
          <AppLayout {...this.props} />
        </MDXProvider>
      </Container>
    )
  }
}





export default NextApp
