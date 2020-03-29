import React from "react"

import { AppLayout } from "../components/AppLayout"
import styled from "@emotion/styled"

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Text = styled.p`
  max-width: 800px;
  position: relative;
  margin-bottom: 16px;

  font-size: 26px;
  line-height: 1.5;

  @media (min-width: 520px) {
    font-size: 36px;
  }
`

const LinkContainer = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;

  @media (min-width: 520px) {
    flex-direction: row;

    & > *:not(:last-child) {
      margin-right: 40px;
    }
  }
`

const Link = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  font-size: 26px;

  @media (min-width: 520px) {
    font-size: 36px;
  }
`

export default () => (
  <AppLayout>
    <Container>
      <Text>Hey, I'm Mickael Zhang.</Text>
      <Text>I'm a Software Engineer living in Paris and currently working on PayFit's design system.</Text>
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
