import React, { FC } from "react"
import styled from "@emotion/styled"

import { GlobalStyle } from './GlobalStyle'

const Container = styled.div`
  background-color: #FAFAFA;
  height: 100%;
`

export const AppLayout: FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        {children}
      </Container>
    </>
  )
}


