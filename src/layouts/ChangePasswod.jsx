import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};
const validationSchema = Yup.object({
  currentPassword: Yup.string().required("Current password is required!").matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
    'Password must be at least 10 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character'
  ),
  newPassword: Yup.string().required("New password is required!").matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
    'Password must be at least 10 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character'
  ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
const ChangePasswod = (props) => {
  const [showPwd, setShowPwd] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const {cancel,handleChangePasswordResultPopUp} = props
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    cancel();
    handleChangePasswordResultPopUp()
  };
  
  const togglePassword = (text) => {
    setShowPwd({ ...showPwd, [text]: !showPwd[text] });
  };
  return (
    <>
      <Typography variant="h5">Change Password</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="signupForm">
            <Field
              as={TextField}
              label="Current Password"
              variant="outlined"
              name="currentPassword"
              type={showPwd.currentPassword ? "text" : "password"}
              error={touched.currentPassword && !!errors.currentPassword}
              helperText={touched.currentPassword && errors.currentPassword}
              fullWidth
              sx={{marginBottom:'50px'}}
              margin="normal"
              className="customFontColor"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => togglePassword("currentPassword")}
                      edge="end"
                    >
                      {showPwd.currentPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* <Typography
              sx={{ textAlign: "justify", wordSpacing: "0px", padding: "10px" }}
            >
              Your password must have at least 10 characters. For better
              security, use a mix of letters, numbers, and special characters.
            </Typography> */}
            <Field
              as={TextField}
              label="New Password"
              variant="outlined"
              name="newPassword"
              type={showPwd.newPassword ? "text" : "password"}
              error={touched.newPassword && !!errors.newPassword}
              helperText={touched.newPassword && errors.newPassword}
              fullWidth
              margin="normal"
              className="customFontColor"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => togglePassword("newPassword")}
                      edge="end"
                    >
                      {showPwd.newPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Field
              as={TextField}
              label="Confirm New Password"
              variant="outlined"
              name="confirmPassword"
              type={showPwd.confirmPassword ? "text" : "password"}
              error={touched.confirmPassword && !!errors.confirmPassword}
              helperText={touched.confirmPassword && errors.confirmPassword}
              fullWidth
              
              margin="normal"
              className="customFontColor"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => togglePassword("confirmPassword")}
                      edge="end"
                    >
                      {showPwd.confirmPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ mt: 2 }}>
              <Button onClick={cancel} variant="outlined" sx={{ mr: 1 }}>
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Update
              </Button>
            </Box>
            
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ChangePasswod;
