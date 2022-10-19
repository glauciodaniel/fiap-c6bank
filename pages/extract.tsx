import React from 'react';
import styled from '@emotion/styled';
import SideBar from '../components/SideBar';

const ExtractContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
`

export default function Extract(){
    return (

        <ExtractContainer>
            <SideBar/>
            <section>
                <h1>Extract</h1>
                Aqui virá a listagem de extrato
            </section>
        </ExtractContainer>
    )
}
