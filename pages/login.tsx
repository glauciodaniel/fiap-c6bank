import React, {useState, useEffect, FormEvent} from 'react'
import { Typography, Container, CssBaseline,Box,TextField, Checkbox, Button, FormControlLabel } from '@mui/material';
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
const [contador, setContador] = useState<number>(5);

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
},[contador]);


useEffect(()=>{
    if(nome.length > 0 ){
        console.log(`Executando useEffect mudando para maiúsculo ${nome}`);
    }
},[nome])


const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
    // Previne o comportamento padrão do formulário, que seria recarregar a página.
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log(data);
}





  return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
             <Box sx={{mt:8, display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    {/* <button onClick={()=>setContador(contador+1)}>Muda o contador</button>
                    <button onClick={()=>setNome(nome.toUpperCase())}>Muda o Nome</button> */}
                 {/*'O State contador vale: ' + contador*/ }


    <TextField margin="normal" required  fullWidth id="email" label="Digite o e-mail" name="email" autoComplete="email" autoFocus/>
    <TextField margin="normal"  required fullWidth id="password" type="password" label="Digite a senha" name="password" autoComplete="current-password" autoFocus/>
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Lembrar de mim" />
                    <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>Entrar</Button>
                </Box>
             </Box>
            <Copyright site="www.avanade.com.br" sx={{mt:8, mb: 4}} />
        </Container>
    </ThemeProvider>
  )
}
