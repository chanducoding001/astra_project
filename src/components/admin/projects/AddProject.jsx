import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';

const initialValues = {
    projectRefNo: '',
    projectName: ''
};

const validationSchema = Yup.object({
    projectRefNo: Yup.string().required('Project reference number is required!'),
    projectName: Yup.string().required('Project name is required!')
});

const AddProject = (props) => {
    const { onClick,handleAddProjectResultPopUp } = props;

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
        onClick();
        handleAddProjectResultPopUp();
    };

    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%',
        width: '100%'
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ touched, errors, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} style={containerStyles}>
                        <Typography variant='h5'>Create New Project</Typography>
                        <Field
                            as={TextField}
                            label='Project Ref No'
                            name='projectRefNo'
                            helperText={touched.projectRefNo && errors.projectRefNo ? errors.projectRefNo : null}
                            error={touched.projectRefNo && Boolean(errors.projectRefNo)}
                        />
                        <Field
                            as={TextField}
                            label='Project Name'
                            name='projectName'
                            helperText={touched.projectName && errors.projectName ? errors.projectName : null}
                            error={touched.projectName && Boolean(errors.projectName)}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                            <Button variant='outlined' onClick={onClick}>Cancel</Button>
                            <Button variant='contained' type='submit'>Create</Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default AddProject;
