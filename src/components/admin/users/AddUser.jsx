import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik,Form,Field } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const AddUser = (props) => {
    const {handleAddUserPopUp} = props;

    const initialValues = {email:''};
    const validationSchema = Yup.object({
      email:Yup.string().required('Email is required!').email('Enter valid email!'),
    });
    const onSubmit = (values,{resetForm})=>{
      console.log(values);
      resetForm();
    }
  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
          ({touched,errors,handleSubmit})=>(
            <Form onSubmit={handleSubmit}>
              <Box sx={{display:'flex',
          flexDirection:'column',
          width:'100%',
          height:'100%',
          alignItems:'flex-start',
          justifyContent:'center'
          }}>
        <Typography variant='h6' sx={{fontWeight:'600'}}>Add User</Typography>
        <Field
        as={TextField}
        name='email'
        label='Email'
        // placeholder='Email'
        type='email'
        helperText={touched.email && errors.email}
        error={touched.email && errors.email}
        // onChange={}
        // value={}
        />
        </Box>
        <Box sx={{width:'100%',display:'flex',justifyContent:'space-around'}}>
        <Button variant='outlined' onClick={handleAddUserPopUp}>Cancel</Button>
        <Button variant='contained' type='submit' >Invite</Button>
        </Box>
            </Form>
          )
        }
      </Formik>
    </>
  )
}

export default AddUser;
