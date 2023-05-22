import React from 'react';
import {useField} from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {AppBar, Toolbar, IconButton, Typography} from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';



export const Navbar = () => {
  return (
    <Box position="fixed" sx={{ flexGrow: 1 }} class = 'fade-in-top'>
    <AppBar  sx={{backgroundColor: '#033564'}}>
      <Toolbar >
      <img src="https://i.ibb.co/WpzxYPY/Group-4.png" alt="Group-4" border="0" height={80} component="div" sx={{ flexGrow: 1 }}></img>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
        <Button sx={{ color: '#fff', p:3, '&:hover': { color: '#ebff78', transition: '0.3s', background: '#98b0ff19',  borderRadius: 0}}} > 
            <LocalLibraryIcon sx = {{pr: 2}}/> 
            <Texts text = 'wala lang' s = '20px' fw = '400' /> 
          </Button>
          <Button sx={{ color: '#fff', p:3, '&:hover': { color: '#ebff78', transition: '0.3s', background: '#98b0ff19',  borderRadius: 0}}}  target = '_blank' href = 'https://elms.sti.edu/site/not_logged_in?from=%2Fstudent_take_quiz_assignment%2Fstart%2F32834929&log_in_required=true'> 
            <LocalLibraryIcon sx = {{pr: 2}}/>
            <Texts text = 'elms' s = '20px' fw = '400' /> 
          </Button>
          <Button sx={{ color: '#fff', p: 3, '&:hover': { color: '#ebff78', transition: '0.3s', background: '#98b0ff19',  borderRadius: 0}}}  href = './login' >
          <LogoutIcon sx = {{pr: 2}}/>
          <Texts text = 'log out' s = '20px' fw = '400'/>
          </Button>
      </Toolbar>
    </AppBar>
  </Box>
    
  )
}

export function PreLoader() {
    return (
      <div class= 'fade-in'>
         <Box sx={{ mt: '29vmin', mb: '31vmin'}}>
           <img src="https://i.ibb.co/j4ZtgdF/804.gif" width='400vw' alt="804"></img>
         </Box>
      </div>
    );
}

export const Buttons = (props) =>{
    return (
    <div class = {props.animation}> 
      <Button onClick={handleSubmit} type= {props.type} 
      sx={{backgroundColor: '#1b44aa'}}
         variant={props.v}
         fullWidth = {props.fullW}
         disabled = {props.dis}
         href = {props.h}
         p = {props.p}
         >
        <Typography fontWeight={700} fontSize={20}>{props.label}</Typography>
      </Button>
    </div>
  );
}

export const Texts = (props) => {
  return (
    <div class={props.animation}>
      <a>
       <Typography 
         color={props.c} 
         fontSize={props.s}
         fontWeight={props.fw}>
         {props.text}
       </Typography>
     </a>
    </div>
  );
}

export const TextFields =( {name, ...otherProps}) => {
   const  [field, mata] = useField(name);
   const configTextField = {
     ...field,
     ...otherProps,
   }
   
   if (mata && mata.touched && mata.error) {
     configTextField.error = true;
     configTextField.helperText = mata.error;
   }
   
    return (
      <div class={configTextField.animation}> 
          <TextField {...configTextField}
             sx={{borderRadius: 1, boxShadow: 4, backgroundColor: 'white'}} 
             fullWidth = {configTextField.fullW}
             variant = 'filled'
             ref = {configTextField.r}
          />
      </div>
    );
}

export const Footer = () => {
    return (
        <div class = "fade-in-bottom" id = "menu">
        <Box sx={{backgroundColor: '#033564', display: 'flex', justifyContent: 'right'}}> 
         <a href = "https://www.facebook.com/" target='_blank'>  
            <FacebookRoundedIcon sx={{fontSize: '6vmin', p: '1.3vmin', color: 'white', '&:hover': { color: '#ebff78', transition: '0.5s',} }} />
         </a>  
        </Box>
        </div>
    )
}