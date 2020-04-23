import React, { ReactNode } from "react"
import styled from "@emotion/styled"

interface HeadingProps {
  level?: '1' | '2' | '3' | '4' | '5' | '6' 
  children: ReactNode
}

const headingScale = (p: Required<Pick<HeadingProps, 'level'>>) => {
  switch (p.level) {
    case '1':
      return `
        font-size: 64px;
        font-weight: 500;
      `
    case '2':
      return `
        font-size: 40px;
        font-weight: 500;
      `
    case '3':
      return `
        font-size: 28px;
        font-weight: 500;
      `
    case '4':
      return `
        font-size: 24px;
        font-weight: 500;
      `
    case '5':
      return `
        font-size: 20px;
        font-weight: 500;
      `
    case '6':
      return `
        font-size: 16px;
        font-weight: 500;
      `
  }
}

const SHeading = styled.span<Required<Pick<HeadingProps, 'level'>>>`
  ${headingScale}
`


export const Heading = ({ level = '1', children }: HeadingProps) => {
  return (
    <SHeading as={`h${level}`} level={level}>
      {children}
    </SHeading>
  )
}

