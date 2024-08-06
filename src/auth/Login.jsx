import React, { useState } from 'react';
import { Button, Card, Checkbox, FormControlLabel, TextField, Typography, Link, IconButton, InputAdornment } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './auth.css';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        <Typography variant="h5" gutterBottom>
          Please sign-up to your account.
        </Typography>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ errors, touched, handleSubmit, setFieldValue,values }) => (
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
              <div className="optionsContainer">
                <FormControlLabel
                  control={
                    <Field
                      name="rememberMe"
                      as={Checkbox}
                    //   checked={values.rememberMe}
                      color="primary"
                    />
                  }
                  label="Remember Me"
                />
                <Link href="#" variant="body2" className="forgotPassword">
                  Forgot Password?
                </Link>
              </div>
              <Button variant="contained" type="submit" fullWidth>
                Sign UP
              </Button>
              <Typography variant="body2" className="signinLink">
                Already have an account? <Link href="#">Sign in instead</Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default Signup;
