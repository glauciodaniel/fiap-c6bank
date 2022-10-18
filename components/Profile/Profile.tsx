import React from 'react'
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f8f8f8;
    font-family: sans-serif;
    background-color: #242424;
    width: 100%;
    height: 450px;
`;
const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;
export default function Profile() {
  return (
    <ProfileContainer>
        <AvatarContainer>
            <Avatar alt="Glaucio Daniel" src="https://avatars.githubusercontent.com/u/1216883?v=4" sx={{ width: 200, height: 200 }} />
            <h2>Glaucio Daniel</h2>
            <h3>Software Engineer</h3>
        </AvatarContainer>
    </ProfileContainer>
  )
}

