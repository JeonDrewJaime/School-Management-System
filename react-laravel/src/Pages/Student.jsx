
//States
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
//Assets
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//Animation
import Box from '@mui/material/Box';
//CSS
import "../App.css";
//Components
import {Footer} from '../Components/GUI';



export default function Student() {
    
    const theme = createTheme({
        typography: {
          fontFamily: [
            'Quicksand',
            'sans-serif'
          ].join(','),
        },
      });
    
    return (
        <div className="App">
          <div class = "puff-in-center"  >
          <Box sx={{ mt: '29vmin', mb: '31vmin'}}>
            <img  src="https://i.ibb.co/j4ZtgdF/804.gif"  width='400vw'  alt="804"></img>
          </Box>
          </div>
          :
          <ThemeProvider theme = {theme}>
          <Grid id = "backgroundImage" container spacing = {0} rowGap = {3.8}  sx={{ pt: '12vmin'}}>
          
          <div class = "fade-in-bottom">
            <Footer/>
          </div>
          </Grid>

         </ThemeProvider>
        
           
        </div>
    )
    
} 