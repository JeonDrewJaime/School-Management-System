
//States
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
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
//CSS
import "../App.css";
//
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SchoolIcon from '@mui/icons-material/School';
import zIndex from '@mui/material/styles/zIndex';
import axiosClient from '../axios-client';
import { useStateContext } from '../Context/ContextAPI';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      sx={{ ml: '2vmin', w: 20}}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 10, mr: '2vmin'}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
export default function Admin() {
  const [loading, setLoading]= useState(false);
  const [value, setValue] = React.useState(0);
  const{token, user, setUser} = useStateContext()
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const theme = createTheme({
        typography: {
          fontFamily: [
            'Quicksand',
            'sans-serif'
          ].join(','),
        },
      });
      useEffect(() => {
        axiosClient.get('student')
        .then(({ data }) => { 
          setUser(data)
      })
    }, [])

    return (
      <div >
        { loading ? <PreLoader /> :
          <ThemeProvider theme = {theme}>
          <Grid  container>
          <Grid item xs={12}  > 
          <Navbar />
          </Grid>
          <Grid item xs={12}  > 
          <Box
      sx={{ mt: 10,flexGrow: 1, display: 'flex', height: '100%', width: '100%'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{p: '5px',  bgcolor: '#D5E4F7', width: '8%', position: 'fixed',  height: '100%', zIndex: 1}}
      >
          <Tab label = {
                <Box sx = {{pl: '5px', color: '#075BA9'}}>
                 <SpaceDashboardIcon sx = {{ color: '#075BA9'}}/>
                 <Texts text = 'Dashboard' s = '15px' fw = '600' c = '#075BA9' />
                 </Box>
                 }{...a11yProps(0)}/>  
              <Tab label= {
                <Box sx = {{pl: '5px', color: '#075BA9'}}>
               <ScheduleIcon sx = {{  color: '#075BA9' }}/>
               <Texts text = 'Schedules' s = '15px' fw = '600' c = '#075BA9' />  
               </Box>
              } {...a11yProps(1)} />
              <Tab label= {  
                <Box>
                <SchoolIcon sx = {{ color: '#075BA9'}}/>
            <Texts text = 'Schedules' s = '15px' fw = '600' c = '#075BA9' />  
            </Box>} {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      
      <Box class = "fade-in-left">
      <Box  id = 'backgroundImage' sx  ={{ pr:89.2, pt: 30, ml: 5, mt: -10 }} >
           <Box sx= {{  ml: 25 }}>
              <Texts text = 'Hi there!' s = '20px' fw = '600' c = 'white'/>  
              <Texts text = 'Name' s = '40px' fw = '800' c = 'white' />  
              </Box>
              </Box>
         <Box  sx= {{  ml: 15,  zIndex: 1, mt: 5}} >
         
              <Texts text =  {'Student id: ' + user.id}  s = '20px' fw = '600' c = '#075BA9' /> 
              <Texts text = 'Payment Status:' s = '20px' fw = '600' c = '#075BA9' /> 
              <Texts text = 'Branch:' s = '20px' fw = '600' c = '#075BA9' /> 
              <Texts text = 'Course' s = '20px' fw = '600' c = '#075BA9'/>  
              <Texts text = 'Year Level:' s = '20px' fw = '600' c = '#075BA9' /> 
              <Texts text = 'Section:' s = '20px' fw = '600' c = '#075BA9' /> 
              <Texts text = 'Payment Type:' s = '20px' fw = '600' c = '#075BA9' /> 
              <Texts text = 'Mode of Payment:' s = '20px' fw = '600' c = '#075BA9' /> 
              <Texts text = 'Term:' s = '20px' fw = '600' c = '#075BA9' /> 
              <Texts text = 'Contact No.:' s = '20px' fw = '600' c = '#075BA9' /> 
              <Texts text = 'Email Address:' s = '20px' fw = '600' c = '#075BA9' />
              <Texts text = 'Age:' s = '20px' fw = '600' c = '#075BA9' />
              <Texts text = 'Gender:' s = '20px' fw = '600' c = '#075BA9' />
              <Texts text = 'Birthdate:' s = '20px' fw = '600' c = '#075BA9' />
              <Texts text = 'Religion:' s = '20px' fw = '600' c = '#075BA9' />
              <Texts text = 'Father name:' s = '20px' fw = '600' c = '#075BA9' />
              <Texts text = 'Mother name:' s = '20px' fw = '600' c = '#075BA9' />
              <Texts text = 'Guardian name:' s = '20px' fw = '600' c = '#075BA9' />
              </Box>
              </Box>

      </TabPanel>
      <TabPanel value={value} index={1}> 
      <Box class = "slide-in-elliptic-bottom-fwd">
      <Box  sx= {{  ml: 15,  zIndex: 1, mt: 5}} >
      <Texts text = 'MAMA MO' s = '300px' fw = '800' c = '#075BA9' />  
      </Box>
      </Box>
      </TabPanel>
      
      <TabPanel value={value} index={2}> 
      <Box class = "slide-in-elliptic-bottom-fwd">
      <Box  sx= {{  ml: 15,  zIndex: 1, mt: 5}} >
      <Texts text = 'ASS MO' s = '300px' fw = '800' c = '#075BA9' />  
      </Box>
      </Box>
      </TabPanel>
    </Box>
          </Grid>
   

            <Grid item xs={12} sx={{ mt: '100vmin', zIndex: 4,position: 'relative'}}  > 
            <Footer/>
            </Grid >
     
          </Grid>
          </ThemeProvider>
        }
      </div>
   )
} 