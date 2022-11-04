import React, {useState, useEffect, FormEvent} from 'react'
import { Typography, Container, CssBaseline,Box,TextField,
     Checkbox, Button, FormControlLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/utils/Copyright';
import Snackbar from '../components/utils/Snackbar';
import axios from 'axios';

const theme = createTheme();

export default function LoginPage() {


const [nome, setNome] = useState('');
const [contador, setContador] = useState<number>(5);
const [error, setError] = useState<boolean>(false);
const [errorMessage, setErrorMessage] = useState<string>('');
const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>('');
const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
const [open, setOpen] = useState<boolean>(false);


useEffect(()=>{

    if(password && password.length < 6){
        setError(true);
        setErrorMessage('A senha deve ter no mínimo 6 caracteres');
    }else if(password) {
        setError(false);
        setErrorMessage('');
        //enviar o formulário para o servidor........
        //deu certo... vamos criar o snackbar...
       // setOpen(true);
       axios.post('http://localhost:3000/auth/login', {
        login: email,
        password
    }).then((response)=>{
        console.log(response);      
        if(response.status == 200){
            setOpen(true);
        }
    }).catch((error)=>{
        console.log(error);
    })

    }

},[password]);


const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
    // Previne o comportamento padrão do formulário, que seria recarregar a página.
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setEmail(data.get('email'));
    setPassword(data.get('password'));
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

                    {error && <Typography color="error">{errorMessage}</Typography>}

                </Box>
             </Box>
            <Copyright site="www.avanade.com.br" sx={{mt:8, mb: 4}} />

                    {open && <Snackbar open={open} hide={6} message="Usuário autenticado com sucesso... Aguarde..." /> }

        </Container>
    </ThemeProvider>
  )
}
