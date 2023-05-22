
//States
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import {PreLoader, Buttons, Texts, TextFields, Footer, Navbar} from '../Components/GUI';
//Assets
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
//Animation
import Box from '@mui/material/Box';
//CSS
import "../App.css";
//
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SchoolIcon from '@mui/icons-material/School';
import zIndex from '@mui/material/styles/zIndex';

export default function Admin() {
  const [loading, setLoading]= useState(false);
  
    const theme = createTheme({
        typography: {
          fontFamily: [
            'Quicksand',
            'sans-serif'
          ].join(','),
        },
      });
      useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
          setLoading(false)
        }, 8000)
      }, [])
      
    return (
      <div className="App">
        { loading ? <PreLoader /> :
          <ThemeProvider theme = {theme}>
          <Grid item xs={2}  > 
           <Box >
           <Paper className = 'fade-in-left' id = "menu" sx = {{background: '#D2E9FF', position: 'fixed', mt: '5vmax', ml: '2vmin', pb: '33%' }}>
            <MenuList>
          <MenuItem sx = {{  p: '20px'}}>
            <SpaceDashboardIcon sx = {{pr: '15px', color: '#075BA9'}}/>
            <Texts text = 'Dashboard' s = '20px' fw = '600' c = '#075BA9' />  
          </MenuItem>
          <MenuItem sx = {{  p: '20px'}}>
            <ScheduleIcon sx = {{pr: '15px', color: '#075BA9'}}/>
            <Texts text = 'Schedules' s = '20px' fw = '600' c = '#075BA9' />  
          </MenuItem>
          <MenuItem sx = {{  p: '20px'}}>
            <SchoolIcon sx = {{pr: '15px', color: '#075BA9'}}/>
            <Texts text = 'Schedules' s = '20px' fw = '600' c = '#075BA9' />  
          </MenuItem>
        </MenuList>
      </Paper>

           </Box>
          </Grid>
          <Grid id = "backgroundImage" container>
          <Grid item xs={12}  > 
          <Navbar/>
          </Grid>

            <Grid item xs={12} sx={{ mt: '80%'}}  > 
              <Footer/>
            </Grid>
          </Grid>

          </ThemeProvider>
        }
      </div>
    )
    
} 