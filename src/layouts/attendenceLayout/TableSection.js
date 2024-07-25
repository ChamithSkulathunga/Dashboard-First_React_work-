import React from 'react'
import TabelTitleAndContentWrapper from './common/TabelTitleAndContentWrapper'
import TableBodySection from './tableSection/TableBodySection'
import TableTitleSection from './tableSection/TableTitleSection'

export default function TableSection() {
  return (
    <div   style={{boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",height:'180px', borderRadius:'10px'}}>

    <TabelTitleAndContentWrapper >
        <TableTitleSection slot={'first'}/>
        <TableBodySection slot={'second'}/>
    </TabelTitleAndContentWrapper>
    </div>
  )
}
