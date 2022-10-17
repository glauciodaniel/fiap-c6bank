import React, { useState } from 'react'
import Alert from './Alert'
import {AlertColor, Snackbar as Container} from '@mui/material';

type SnackbarProps = {
    open: boolean,
    message: string,
    hide: number,
    severity ?: AlertColor,
}

export default function Snackbar(props: SnackbarProps) {
const [open, setOpen]= useState<boolean>(props.open);
  
const handleClose = ()=>{
    setOpen(false);
}
  return (
    <Container open={open} autoHideDuration={props.hide * 1000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={props.severity?props.severity:"success"} sx={{ width: '100%' }}>
      {props.message}
      </Alert>
    </Container>
  )
}
