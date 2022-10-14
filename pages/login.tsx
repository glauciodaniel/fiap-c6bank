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


const [empresa, setEmpresa] = useState<string>('');
const [nome, setNome] = useState('');
const [contador, setContador] = useState<number>(0);

// A primeira vez após carregar a página e após o render
// Executa também a cada alteração de estado
useEffect(()=>{
    if(contador ==0){
        document.title = `Executando useEffect a primeira vez ${contador}`;
    }else{
        document.title = `Executando useEffect a cada alteração ${contador}`;
    }
   // setContador(contador + 1);
    console.log(`Executando useEffect a cada chamada ${contador}`);
},[]);


  return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
             <Box sx={{mt:8, display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={(e)=>{console.log('enviou')}}>
                    <button onClick={()=>setContador(contador+1)}>Muda o contador</button>
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
