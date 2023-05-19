//States
import { useState, useEffect} from 'react';
//For Valication (Formik & Yup)
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
//Components
import {PreLoader, Texts, TextFields, Footer, Buttons} from './GUI';
//Mui components
import { createTheme, ThemeProvider, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
//CSS
import "../App.css";
import { useStateContext } from '../Context/ContextAPI';
import axiosClient from '../axios-client';

export default function Login() {
  const [loading, setLoading]= useState(false);
  const FORM_VALIDATION = Yup.object().shape({
     user_id: Yup.number()
    .test('len', 'Must be exactly 11 numbers.', val => !val || (val && val.toString().length === 10))
    .integer()
    .typeError('Only enter a number.')
    .required('This field is required.'),
     user_pass: Yup.string()
    .required('This field is required.')
  });
  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 1000)
  }, [])
  
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Quicksand',
        'sans-serif'
      ].join(','),
    },
  });

  const {setRole, setUser, setToken} = useStateContext();
  const [errors, setErrors] = useState(null);

  const INITIAL_FORM_STATE  = {
    user_id: '',
    user_pass: '',
  };
  const handleSubmit = (values) => {
    setErrors(null)
    axiosClient
      .post("/login", values)
      .then(({data}) => {
              setUser(data.user);
              setToken(data.token);
              setRole(data.role);
            })
            .catch(error => {
              console.log(error);
                const response = error.response;
                if (response && response.status == 422) {
                    //422 = validation error code
                  if(response.data.errors) {
                    setErrors(response.data.errors)
                  }else { 
                    setErrors({
                      user_id:[response.data.message]
                    })
                  }
                }
            });
  };

  return (
    <div  >
    { loading ? <PreLoader/> :
      <ThemeProvider theme = {theme}>
        <Grid id = "backgroundImage"container spacing = {0} rowGap = {3.8}  sx={{ pt: '10vmin'}}>
          <Grid item xs={3.9} ms >
           <img src="https://i.ibb.co/vQh9cs8/sti-logo.png" class = "fade-in" alt="sti-logo" border="0"  width='90%' height='90%' style = {{ objectFit: 'contain' }}></img>
          </Grid>
          <Grid item xs={0.8}  >
           <img src="https://i.ibb.co/g6m1hXd/DIVIDER.png" class  = "slide-in-blurred-left" alt="DIVIDER" border="0"></img>
          </Grid>
          <Grid item xs={5} sx={{ mt: '5.5vmin', alignSelf: 'center'}} > 
            <Formik initialValues={{...INITIAL_FORM_STATE}} validationSchema={FORM_VALIDATION} onSubmit={handleSubmit} >  
              <Form>
              {errors ?
                 <Grid xs={12} textAlign= 'center' > 
                 <Grid item  > 
                   <img  class = "fade-in" src="https://i.ibb.co/8gKHrqb/Icon-ionic-md-alert.png" width='45%' height='45%'  alt="Icon-ionic-md-alert"hborder="0" ></img>
                 </Grid>  
                 <Grid item xs={12} textAlign= 'center'> 
                 <Texts animation = 'fade-in' fw = '800' c = '#8B0306' s = '45px' text = "USER NOT FOUND" />
                  <Texts animation = 'fade-in' fw = '500' c = '#8B0306' s = '15px' text = "YOUR USERNAME OR PASSWORD IS INCORRECT." />
                 </Grid>
                 <Grid item xs={12} textAlign= 'center'  sx = {{ mt: '1vmin' }} onClick={() => setErrors(false)}>
                   <Buttons animation = 'fade-in-bck' type= '' v= 'contained'  label = 'TRY AGAIN' fW = {false}  />
                  </Grid>  
                  <Button  variant = 'text' >
                 <Texts animation = 'fade-in' text = "Forgot Account? " fw = '800' c = '#033564' s = '14px'/>
                 </Button>
                 </Grid>
              :
              <Grid container rowSpacing={4} rowGap = {1} method = "post" >
                <Grid item xs = {12}  >    
                <TextFields  animation = "fade-in-left" label = "User ID"  id = "studentID" bgc = "white" fullW = {true} name = "user_id"/>
                </Grid>
                <Grid item xs = {12}> 
                  <TextFields type = "password" animation = "fade-in-left" label = "Password" bgc = "white" fullW = {true} name = "user_pass"/>
                </Grid>
                <Grid item xs = {12}> 
                <div class = 'fade-in-top'> 
               <Button type= 'submit'  sx={{backgroundColor: '#1b44aa'}} variant= 'contained'fullWidth >
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
                 }
               </Form>        
            </Formik>
          </Grid>
          
        </Grid>
        <Grid sx = {{ mt: '19vmin'}}>
        <Footer/>
        </Grid>
      </ThemeProvider>
    }
    </div>
  );
}
