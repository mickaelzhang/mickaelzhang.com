import React from "react"

import { AppLayout } from "../components/AppLayout"
import styled from "@emotion/styled"

const Container = styled.div`
  height: 100%;
`

const Text = styled.p`
  font-size: 36px;
  line-height: 1.5;
  max-width: 800px;
  position: relative;
  margin-bottom: 16px;
`

const LinkContainer = styled.div`
  margin-top: 48px;
  display: flex;

  & > *:not(:first-child) {
    margin-left: 40px;
  }
`

const Link = styled.a`
  font-size: 36px;
  color: black;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`




export default () => (
  <AppLayout>
    <Container>
      <Text>Hey, I'm Mickael Zhang.</Text>
      <Text>I'm Software Engineer living in Paris and currently working on PayFit's design system.</Text>
      <LinkContainer>
        <Link href="https://twitter.com/mickaelzhg" target="_blank" rel="noopener">
          // Twitter
        </Link>
        <Link href="https://github.com/mickaelzhang" target="_blank" rel="noopener">
          // GitHub
        </Link>
      </LinkContainer>
    </Container>
  </AppLayout>
)
