import React from 'react'
import styled from '@emotion/styled';
import Link from 'next/link';

const MenuContainer = styled.nav`
    display: flex;
    width: 100%;
    flex-direction: column;
    color: #f8f8f8;
    font-family: sans-serif;
    background-color: #242424;
    ul {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        height: 350px;
        overflow-Y: auto;
        &::-webkit-scrollbar-thumb{
            background-color: #242424;
            outline: 1px solid #777777;
        }
        &::-webkit-scrollbar{
            width: 6px;
        }
        li {
            width: 100%;
            list-style: none;
            display: flex;
            line-height: 60px;
            border-left: 4px solid transparent;
            padding-left: 5%;
            &:hover {
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                background-color: #616161;
                border-left: 4px solid #ffef0d;
                cursor:pointer;
            }
        }
    }
`
export default function Menu() {
  return (
    <MenuContainer>
        <ul>
            <li>
                <Link href="#">
                {/* <Icon type="inicio"/> */}
                <a>Início</a>
                </Link>
            </li>
            <li>Extrato</li>
            <li>Transferência</li>
            <li>Pagamentos</li>
            <li>Cartões</li>
            <li>Crédito</li>
        </ul>
    </MenuContainer>
  )
}
