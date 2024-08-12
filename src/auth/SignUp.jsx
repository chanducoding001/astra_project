import React, { useState } from 'react';
import { Button, Card, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './auth.css';
import '../styles.css';
import { useNavigate, Link } from 'react-router-dom';
import SuccessPage from '../reusables/SuccessPage';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [successPopUp, setSuccessPopUp] = useState(false);

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Enter a valid email'),
    password: Yup.string().required('Password is required').min(6, 'Password should be at least 6 characters long'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: { ...initialValues, rememberMe: false } });
    setSuccessPopUp(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className='pageWrapper'>
      <Card variant="outlined" className='signupWrapper'>
        <Typography variant="h5" gutterBottom className='typographyStyle' sx={{textAlign:'center'}}>
          Please sign-up to your account.
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
                className='customFontColor'
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
                className='customFontColor'
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
              <Field
                as={TextField}
                label="Confirm Password"
                variant="outlined"
                name='confirmPassword'
                type={showConfirmPassword ? 'text' : 'password'}
                error={touched.confirmPassword && !!errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
                fullWidth
                margin="normal"
                className='customFontColor'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              
              <Button variant="contained" type="submit" fullWidth sx={{marginBottom:1,marginTop:2}}>
              Sign UP
              </Button>
              <Typography variant="body2" className="signinLink typographyStyle" sx={{display:'flex',justifyContent:'space-evenly'}}>
                Already have an account? <Link to='/login' className='linkStyle'>Sign in instead</Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Card>
      <SuccessPage open={successPopUp} handleClose={() => navigate('/login')}>
        <Typography variant="h5" className='typographyStyle' gutterBottom>Thank you for creating your account!</Typography>
        <Typography variant="body1" className='typographyStyle' gutterBottom>Please click the button below to activate your account.</Typography>
        <Button variant="contained" onClick={() => navigate('/login')} className='customButton'>Activate</Button>
      </SuccessPage>
    </div>
  );
};

export default SignUp;
