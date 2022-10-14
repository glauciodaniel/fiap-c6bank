import React, {useState, useEffect} from 'react'
import { Typography, Container, CssBaseline,Box,TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';

type CopyProps = {
    site: string;
    sx?:object;
}

function Copyright(props:CopyProps){
    return (
        <Typography>
            {'Copyright © '}
            <Link color="inherit" href="https://www.avanade.com.br/">
                {props.site}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const theme = createTheme();

export default function LoginPage() {


const [empresa, setEmpresa] = useState('');
const [nome, setNome] = useState('');
const [contador, setContador] = useState(0);


  return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
             <Box sx={{mt:8, display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={(e)=>{console.log('enviou')}}>

                 {'O State contador vale: ' + contador }


    <TextField margin="normal" required fullWidth id="email" label="Digite o e-mail" name="email" autoComplete="email" autoFocus/>
    <TextField margin="normal"  required fullWidth id="password" type="password" label="Digite a senha" name="password" autoComplete="current-password" autoFocus/>
                </Box>
             </Box>
            <Copyright site="www.avanade.com.br" sx={{mt:8, mb: 4}} />
        </Container>
    </ThemeProvider>
  )
}
