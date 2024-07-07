import React from "react";
import {
   Box,
   Container,
   Grid,
   Typography,
   TextField,
   Button,
   Link,
   IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "@/styles/Contact.module.css";

const ContactUsComponent = () => {
   return (
      <Box
         component='main'
         sx={{
            // backgroundColor: "#f4f4f4",
            my: 5,
            color: "#333",
            py: 4,
            // minHeight: "100vh",
         }}
      >
         <Container maxWidth='lg'>
            <Typography variant='h4' gutterBottom textAlign='center'>
               Contact Us
            </Typography>
            <Typography variant='body1' gutterBottom textAlign='center'>
               We would love to hear from you! Please fill out the form below or
               reach us through our social media channels.
            </Typography>
            <Grid container spacing={4} justifyContent='center'>
               <Grid item xs={12} md={6}>
                  <Box
                     component='form'
                     sx={{
                        backgroundColor: "white",
                        padding: 3,
                        borderRadius: 2,
                        boxShadow: 1,
                     }}
                  >
                     <TextField
                        fullWidth
                        label='Name'
                        variant='outlined'
                        margin='normal'
                        required
                     />
                     <TextField
                        fullWidth
                        label='Email'
                        variant='outlined'
                        margin='normal'
                        required
                     />
                     <TextField
                        fullWidth
                        label='Subject'
                        variant='outlined'
                        margin='normal'
                        required
                     />
                     <TextField
                        fullWidth
                        label='Message'
                        variant='outlined'
                        margin='normal'
                        multiline
                        rows={4}
                        required
                     />
                     <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        sx={{ mt: 2 }}
                     >
                        Send Message
                     </Button>
                  </Box>
               </Grid>
            </Grid>
            {/* <Typography
               variant='h6'
               gutterBottom
               textAlign='center'
               sx={{ mt: 4 }}
            >
               Follow Us
            </Typography>
            <Box textAlign='center'>
               <IconButton
                  color='inherit'
                  href='https://facebook.com'
                  sx={{ color: "#333", "&:hover": { color: "#3b5998" } }}
               >
                  <FacebookIcon />
               </IconButton>
               <IconButton
                  color='inherit'
                  href='https://twitter.com'
                  sx={{ color: "#333", "&:hover": { color: "#00acee" } }}
               >
                  <TwitterIcon />
               </IconButton>
               <IconButton
                  color='inherit'
                  href='https://instagram.com'
                  sx={{ color: "#333", "&:hover": { color: "#e4405f" } }}
               >
                  <InstagramIcon />
               </IconButton>
               <IconButton
                  color='inherit'
                  href='https://linkedin.com'
                  sx={{ color: "#333", "&:hover": { color: "#0077b5" } }}
               >
                  <LinkedInIcon />
               </IconButton>
            </Box>
            <Typography variant='body2' textAlign='center' sx={{ mt: 4 }}>
               &copy; {new Date().getFullYear()} ItsIndianGuy. All rights
               reserved.
            </Typography> */}
         </Container>
      </Box>
   );
};

export default ContactUsComponent;
