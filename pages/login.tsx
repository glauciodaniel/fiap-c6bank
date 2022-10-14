import React, {useState, useEffect, FormEvent} from 'react'
import { Typography, Container, CssBaseline,Box,TextField,
     Checkbox, Button, FormControlLabel, Stack, Snackbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Link from 'next/link';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});




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
const [error, setError] = useState<boolean>(false);
const [errorMessage, setErrorMessage] = useState<string>('');
const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>('');
const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
const [open, setOpen] = useState<boolean>(false);

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


useEffect(()=>{

    if(password && password.length < 6){
        setError(true);
        setErrorMessage('A senha deve ter no mínimo 6 caracteres');
    }else if(password) {
        setError(false);
        setErrorMessage('');
        //enviar o formulário para o servidor........
        //deu certo... vamos criar o snackbar...
        setOpen(true);
    }

},[password]);

const handleClose = ()=>{
    setOpen(false);
}

const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
    // Previne o comportamento padrão do formulário, que seria recarregar a página.
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log(data.get('email'));
    console.log(data.get('password'));

    setEmail(data.get('email'));
    setPassword(data.get('password'));
}





  return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
                <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Usuário autenticado com sucesso... aguarde...
                    </Alert>
                </Snackbar>



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
        </Container>
    </ThemeProvider>
  )
}
