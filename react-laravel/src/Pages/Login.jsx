//States
import { useState, useEffect, useRef } from 'react';
//For Valication (Formik & Yup)
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
//Components
import {PreLoader, Buttons, Texts, TextFields, Footer, Navbar} from '../Components/GUI';
//Mui components
import { createTheme, ThemeProvider, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
//CSS
import "../App.css";

export default function Login() {
  const [loading, setLoading]= useState(false);
  const idRef = useRef();
  const passwordRef = useRef();
  const INITIAL_FORM_STATE  = {
       studentId: '',
       password: '',
  };
  const handleSubmit = (e) => {
     console.log(studentId)
  }
  const FORM_VALIDATION = Yup.object().shape({
    studentId: Yup.number()
    .test('len', 'Must be exactly 11 numbers.', val => !val || (val && val.toString().length === 11))
    .integer()
    .typeError('Only enter a number.')
    .required('This field is required.'),
    password: Yup.string()
    .required('This field is required.')
  });
  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 3000)
  }, [])
  
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Quicksand',
        'sans-serif'
      ].join(','),
    },
  });
  return (
    <div className="App" >
    { loading ? <PreLoader/> :
      <ThemeProvider theme = {theme}>
        <Grid id = "backgroundImage"container spacing = {0} rowGap = {3.8}  sx={{ pt: '10vmin'}}>
          <Grid item xs={3.9} ms >
           <img src="https://i.ibb.co/vQh9cs8/sti-logo.png" class = "fade-in" alt="sti-logo" border="0"  width='90%' height='90%' style = {{ objectFit: 'contain' }}></img>
          </Grid>
          <Grid item xs={0.8}  >
           <img src="https://i.ibb.co/g6m1hXd/DIVIDER.png" class  = "slide-in-blurred-left" alt="DIVIDER" border="0"></img>
          </Grid>
          <Grid item xs={5} sx={{ mt: '5.5vmin'}} > 
            <Formik initialValues={{...INITIAL_FORM_STATE}} validationSchema={FORM_VALIDATION} onSubmit={(values, { resetForm}) => {console.log (studentId), handleSubmit(), resetForm()}}>  
              <Form>
               <Grid container rowSpacing={4} rowGap = {1} method = "post" >
                 <Grid item xs = {12}  >     
                   <TextFields  animation = "fade-in-left" label = "User ID"  id = "studentID" bgc = "white" fullW = {true} name = "studentId"/>
                 </Grid>
                 <Grid item xs = {12}> 
                   <TextFields type = "password" animation = "fade-in-left" label = "Password" bgc = "white" fullW = {true} name = "password"/>
                 </Grid>
                 <Grid item xs = {12}> 
                 <div class = 'fade-in-bottom'> 
                <Button type= 'submit'  sx={{backgroundColor: '#1b44aa'}} variant= 'contained'fullWidth>
                <Typography fontWeight={700} fontSize={20}>LOG - IN</Typography>
                </Button>
                </div>
                 </Grid>
                 <Grid item xs = {12} textAlign= 'center' >
                  <Button  variant = 'text' sx = {{ mt: '-6.5vmin' }} >
                   <Texts animation = 'fade-in' text = "Forgot Account? " fw = '800' c = '#033564' s = '14px'/>
                   </Button>
                 </Grid>
                </Grid>
                </Form>
            </Formik>
          </Grid>
          <Grid item xs={12} sx={{ mt: '15.5vmin'}}  > 
                <Footer/>
          </Grid>
        </Grid>
      </ThemeProvider>
    }
    </div>
  );
}
