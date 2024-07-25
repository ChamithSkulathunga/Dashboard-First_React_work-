import React from 'react'
import TitleAndContentWrapper from '../common/TitleAndContentWrapper'
import TitleSection from './statSection/TitleSection'
import ContentSection from './statSection/ContentSection'

export default function StatSection() {
  return (
    
    <TitleAndContentWrapper>

      <TitleSection slot={'first'}/>
      <ContentSection slot={'second'}/>
    </TitleAndContentWrapper>
  )
}
