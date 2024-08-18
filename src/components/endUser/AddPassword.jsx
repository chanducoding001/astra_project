import React, { useState } from 'react';
import { Button, Card, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
// import '../../auth/auth.css';
// import '../../styles.css';
import { useNavigate, Link } from 'react-router-dom';
import SuccessPage from '../../reusables/SuccessPage';

const AddPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [successPopUp, setSuccessPopUp] = useState(false);

  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    password: Yup.string().required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
      'Password must be at least 10 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character'
    ),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
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
        Welcome
        </Typography>
        {/* <Typography variant="h7" gutterBottom className='typographyStyle' sx={{textAlign:'justify'}}>
        Please complete the registration
for your email xx@gmail.com
        </Typography> */}
        <Typography variant="body1" gutterBottom className='typographyStyle' sx={{ textAlign: 'center' }}>
  Please complete the registration for your email <span style={{color:'blue'}}>xx@gmail.com</span>
</Typography>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className='signupForm'>
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
              Register
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
      <SuccessPage open={successPopUp} handleClose={() => navigate('/login')}>
        {/* <Typography variant="h5" className='typographyStyle' gutterBottom>Registration complete, you can now login</Typography> */}
        <Typography variant="body1" className='typographyStyle' gutterBottom sx={{mb:2}}>Registration complete, you can now login</Typography>
        <Button variant="contained" onClick={() => navigate('/login')} className='customButton'>go to login screen</Button>
      </SuccessPage>
    </div>
  );
};

export default AddPassword;
