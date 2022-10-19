import React from 'react'
import styled from '@emotion/styled';
import ExtractHeader from '../ExtractHeader/ExtractHeader';
import ExtractTotal from '../ExtractTotal';
import ExtractData from '../ExtractData';
import db from '../utils/db';

const ExtractContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export default function ExtractContent() {
  return (
    <ExtractContentContainer>
        <ExtractHeader/>
        <ExtractTotal/>
        <ExtractData db={db}/>
        <ExtractTotal/>
    </ExtractContentContainer>
  )
}
