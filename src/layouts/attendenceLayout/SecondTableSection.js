import React from 'react'
import SecondTableTitleSection from './secondTableSection/SecondTableTitleSection'
import SecondTableBodySection from './secondTableSection/SecondTableBodySection'
import TabelTitleAndContentWrapper from './common/TabelTitleAndContentWrapper'

export default function SecondTableSection() {
  return (
    <div   style={{boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",height:'180px', borderRadius:'10px'}}>

    <TabelTitleAndContentWrapper>

        <SecondTableTitleSection slot={'first'}/>
        <SecondTableBodySection slot={'second'}/>
    </TabelTitleAndContentWrapper>
    </div>
  
   
  )
}
