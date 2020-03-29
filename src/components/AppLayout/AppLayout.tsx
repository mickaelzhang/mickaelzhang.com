import React, { FC } from "react"
import styled from "@emotion/styled"

import { GlobalStyle } from './GlobalStyle'

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

export const AppLayout: FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Container>
          {children}
        </Container>
      </PageContainer>
    </>
  )
}


