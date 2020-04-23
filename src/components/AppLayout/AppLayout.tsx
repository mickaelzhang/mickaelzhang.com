import React, { ReactNode } from "react"
import styled from "@emotion/styled"
import { Helmet } from "react-helmet"
import { MDXProvider } from "@mdx-js/react"

import { Heading } from '../Heading'
import { GlobalStyle } from './GlobalStyle'
import { Paragraph, Strong, Emphasis, Quote, Code } from "../Typography"

const PageContainer = styled.div`
  background-color: #FAFAFA;
  height: 100%;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 120px 40px;
`

interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <MDXProvider
      components={{
        h1: ({ children }) => <Heading level="1">{children}</Heading>,
        h2: ({ children }) => <Heading level="2">{children}</Heading>,
        h3: ({ children }) => <Heading level="3">{children}</Heading>,
        h4: ({ children }) => <Heading level="4">{children}</Heading>,
        h5: ({ children }) => <Heading level="5">{children}</Heading>,
        h6: ({ children }) => <Heading level="6">{children}</Heading>,
        p: Paragraph,
        strong: Strong,
        em: Emphasis,
        blockquote: Quote,
        code: Code,
      }}
    >
      <Helmet>
        <title>Mickael Zhang</title>
      </Helmet>
      <GlobalStyle />
      <PageContainer>
        <Container>
          {children}
        </Container>
      </PageContainer>
    </MDXProvider>
  )
}


