import React, { useState } from 'react';
import { Button, Card, Checkbox, FormControlLabel, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './auth.css';
import '../styles.css';
// import SuccessPage from './SuccessPage';
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  // const [successPopUp,setSuccessPopUp] = useState(false);
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .email('Enter a valid email'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
        'Password must be at least 10 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character'
      ),
  });
  
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: { ...initialValues, rememberMe: false } });
    navigate('/')
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='pageWrapper'>
      <Card variant="outlined" className='signupWrapper'>
        <Typography variant="h5" gutterBottom sx={{textAlign:'center'}}>
          Please sign-in to your account.
        </Typography>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className='signupForm'>
              <Field
                as={TextField}
                label="Email"
                variant="outlined"
                name='email'
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                fullWidth
                margin="normal"
              />
              <Field
                as={TextField}
                label="Password"
                variant="outlined"
                name='password'
                type={showPassword ? 'text' : 'password'}
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              
              <div className="optionsContainer">
                <FormControlLabel
                  control={
                    <Field
                      name="rememberMe"
                      as={Checkbox}
                      className='customFontColor'
                    />
                  }
                  label={<span className='typographyStyle'>Remember Me</span>}
                />
                <Typography variant="body2" className="signinLink typographyStyle">
                <Link to='/forgotPassword' className='linkStyle'>Forgot Password?</Link>
              </Typography>
              </div>
              <Button variant="contained" type="submit" fullWidth sx={{marginBottom:1,marginTop:2}}>
                Login
              </Button>
              <Typography variant="body2" className="signinLink typographyStyle" sx={{display:'flex',justifyContent:'space-evenly'}}>
              Don't have an account? <Link to='/signUp' className='linkStyle'>Sign up instead</Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Card>
      {/* <SuccessPage open={successPopUp} handleClose = {()=>navigate('/login')}>
        <Typography variant="h5" sx={{marginBottom:2,fontFamily:'inter',fontSize:'24px',fontWeight:500}} gutterBottom>Thank you for creating your account!</Typography>
        <Typography variant="h7" sx={{marginBottom:2,fontFamily:'inter',fontSize:'16px',fontWeight:600}} gutterBottom>Please click the button below to activate your account.</Typography>
        <Button variant="contained" onClick={()=>navigate('/login')} >Activate</Button>
      </SuccessPage> */}
    </div>
  );
};

export default Login;
