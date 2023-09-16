
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
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      sx={{ ml: '2vmin'}}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 30}}>
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
        setLoading(true)
        setTimeout(()=> {
          setLoading(false)
        }, 500)
      }, [])
      
    return (
      <div className="App">
        { loading ? <PreLoader /> :
          <ThemeProvider theme = {theme}>
          
         
          <Grid id = "backgroundImage" container>
          <Grid item xs={12}  > 
          <Navbar/>
          </Grid>
          <Grid item xs={12}  > 
          <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', mt: '5vmax', ml: '2vmin',display: 'flex', height: '90%',  }} >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              sx={{p: '30px', ml: '-3vmin'}}
            >
              <Tab label = {
                <Box sx = {{pl: '5px', color: '#075BA9'}}>
                 <SpaceDashboardIcon sx = {{ color: '#075BA9'}}/>
                 <Texts text = 'Dashboard' s = '20px' fw = '600' c = '#075BA9' />
                 </Box>
                 }{...a11yProps(0)}/>  
              <Tab label= {
                <Box sx = {{pl: '5px', color: '#075BA9'}}>
               <ScheduleIcon sx = {{  color: '#075BA9' }}/>
               <Texts text = 'Schedules' s = '20px' fw = '600' c = '#075BA9' />  
               </Box>
              } {...a11yProps(1)} />
              <Tab label= {  
                <Box>
                <SchoolIcon sx = {{ color: '#075BA9'}}/>
            <Texts text = 'Schedules' s = '20px' fw = '600' c = '#075BA9' />  
            </Box>} {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0} sx = {{ ml: '2px', p: 30 }}>
            <Texts text = 'Schedules' s = '50px' fw = '800' c = '#075BA9' />  
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Texts text = 'Schedules' s = '50px' fw = '800' c = '#075BA9' /> 
            </TabPanel>
            <TabPanel value={value} index={2}>
            <Texts text = 'Schedules' s = '50px' fw = '800' c = '#075BA9' /> 
            </TabPanel>
        </Box>

          </Grid>


            <Grid item xs={12} sx={{ mt: '30vmin'}}  > 
              <Footer/>
            </Grid>
          </Grid>

          </ThemeProvider>
        }
      </div>
   )
} 