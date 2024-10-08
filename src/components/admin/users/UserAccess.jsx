import { Box, Button, Divider, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const UserAccess = (props) => {
  const { handleUserAccessPopUp,handleUserAccessResultPopUp } = props;
  
  const accessOptions = [
    {
      label: "Users Projects",
      value: "Users Projects",
    },
    {
      label: "All Projects",
      value: "All Projects",
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        p: 2, 
      }}
    >
      <Typography variant="h5" sx={{ 
        textAlign: 'start', 
        width: '100%',
        fontWeight: 'bold'
      }}>Manage User Access</Typography>
      <Box sx={{ width: '100%', textAlign: 'start' }}>
        <Typography sx={{ mb: 2 }}>jones12@gmail.com</Typography>
        <Divider />
      </Box>
      <Box
        sx={{
          height: '40%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 1 }}>
          <span style={{ marginRight: '5px', display: 'flex', alignItems: 'center' }}>
            <StarBorderOutlinedIcon sx={{ fill: 'blue' }} />
          </span>
          <Typography variant="h6" sx={{ fontWeight: '600' }}>Access Control</Typography>
        </Box>
        <Box
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            height: '50px',
            padding: '0 0 0px 15%',
          }}
        >
          <Typography>Project View</Typography>
          <TextField
            id="outlined-select-currency"
            select
            defaultValue="Users Projects"
            sx={{
              height: '40px',
              width: '170px',
              '& .MuiOutlinedInput-root': {
                height: '40px',
              },
              '& .MuiInputBase-input': {
                padding: '10px', // Adjust padding to fit the height
              },
              '& .MuiInputLabel-root': {
                top: '0px', // Adjust label position if necessary
              },
            }}
          >
            {accessOptions.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: 'blue', // Set background color for selected option
                    color: 'white', // Change text color for better visibility
                  },
                  '&:hover': {
                    backgroundColor: 'lightblue', // Set hover background color
                    // color:'black'
                },
                }}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button onClick={handleUserAccessPopUp} variant='outlined' sx={{ mr: 1 }}>Cancel</Button>
        <Button onClick={()=>{
          handleUserAccessPopUp();
          handleUserAccessResultPopUp();
        }} variant='contained'>Update</Button>
      </Box>
    </Box>
  );
};

export default UserAccess;



// import React from "react";
// import { Box, Button, Divider, MenuItem, TextField, Typography } from "@mui/material";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

// const UserAccess = ({ handleUserAccessPopUp }) => {

//   const accessOptions = [
//     { label: "Users Projects", value: "Users Projects" },
//     { label: "All Projects", value: "All Projects" },
//   ];

//   // Yup validation schema
//   const validationSchema = Yup.object({
//     projectView: Yup.string().required("Project View is required"),
//   });

//   // Initial form values
//   const initialValues = {
//     projectView: "Users Projects",
//   };

//   // Form submission handler
//   const onSubmit = (values) => {
//     console.log(values);
//     handleUserAccessPopUp();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//     >
//       {({ values, handleChange }) => (
//         <Form>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               width: '100%',
//               height: '100%',
//               p: 2, 
//             }}
//           >
//             <Typography variant="h5" sx={{ 
//               textAlign: 'start', 
//               width: '100%',
//               fontWeight: 'bold'
//             }}>Manage User Access</Typography>
//             <Box sx={{ width: '100%', textAlign: 'start' }}>
//               <Typography sx={{ mb: 2 }}>jones12@gmail.com</Typography>
//               <Divider />
//             </Box>
//             <Box
//               sx={{
//                 height: '40%',
//                 width: '100%',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//               }}
//             >
//               <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 1 }}>
//                 <span style={{ marginRight: '5px', display: 'flex', alignItems: 'center' }}>
//                   <StarBorderOutlinedIcon sx={{ fill: 'blue' }} />
//                 </span>
//                 <Typography variant="h6" sx={{ fontWeight: '600' }}>Access Control</Typography>
//               </Box>
//               <Box
//                 sx={{ 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   justifyContent: 'space-between',
//                   height: '50px',
//                   padding: '0 0 0px 15%',
//                 }}
//               >
//                 <Typography>Project View</Typography>
//                 <Field
//                   as={TextField}
//                   name="projectView"
//                   select
//                   value={values.projectView}
//                   onChange={handleChange}
//                   sx={{
//                     height: '40px',
//                     width: '170px',
//                     '& .MuiOutlinedInput-root': {
//                       height: '40px',
//                     },
//                     '& .MuiInputBase-input': {
//                       padding: '10px',
//                     },
//                     '& .MuiInputLabel-root': {
//                       top: '0px',
//                     },
//                   }}
//                   error={!!<ErrorMessage name="projectView" />}
//                   helperText={<ErrorMessage name="projectView" />}
//                 >
//                   {accessOptions.map((option) => (
//                     <MenuItem
//                       key={option.value}
//                       value={option.value}
//                       sx={{
//                         '&.Mui-selected': {
//                           backgroundColor: 'blue',
//                           color: 'white',
//                         },
//                         '&:hover': {
//                           backgroundColor: 'lightblue',
//                         },
//                       }}
//                     >
//                       {option.label}
//                     </MenuItem>
//                   ))}
//                 </Field>
//               </Box>
//             </Box>
//             <Box sx={{ mt: 2 }}>
//               <Button onClick={handleUserAccessPopUp} variant='outlined' sx={{ mr: 1 }}>Cancel</Button>
//               <Button type="submit" variant='contained'>Update</Button>
//             </Box>
//           </Box>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default UserAccess;
