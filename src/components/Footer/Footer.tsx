import React from "react";
import {
   Box,
   Container,
   Grid,
   Typography,
   Link,
   IconButton,
   Divider,
} from "@mui/material";
import { socialIcons } from "@/config/config";

const Footer = () => {
   return (
      <Box
         component='footer'
         sx={{
            backgroundColor: "#1a1a1a", // Dark background color
            color: "#e0e0e0", // Light text color for contrast
            py: 4,
         }}
      >
         <Container maxWidth='lg'>
            <Grid
               container
               spacing={4}
               justifyContent='center'
               textAlign={{ xs: "center", sm: "left" }}
            >
               <Grid item xs={12} sm={6} md={3}>
                  <Typography variant='h6' gutterBottom>
                     About Us
                  </Typography>
                  <Typography variant='body2'>
                     We are a tech-focused blog providing tutorials, memes, and
                     insightful articles to help you stay updated with the
                     latest trends.
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={6} md={3}>
                  <Typography variant='h6' gutterBottom>
                     Quick Links
                  </Typography>
                  <Link
                     href='/'
                     sx={{ color: "#e0e0e0", "&:hover": { color: "#41a317" } }}
                     underline='none'
                  >
                     Home
                  </Link>
                  <br />
                  <Link
                     href='/interview-qa'
                     sx={{ color: "#e0e0e0", "&:hover": { color: "#41a317" } }}
                     underline='none'
                  >
                     Interview QA
                  </Link>
                  <br />
                  <Link
                     href='https://blog.itsindianguy.in'
                     sx={{ color: "#e0e0e0", "&:hover": { color: "#41a317" } }}
                     underline='none'
                     target='_blank'
                  >
                     Blog
                  </Link>
                  <br />
                  <Link
                     href='/memes'
                     sx={{ color: "#e0e0e0", "&:hover": { color: "#41a317" } }}
                     underline='none'
                  >
                     Memes
                  </Link>
               </Grid>
               <Grid item xs={12} sm={6} md={3}>
                  <Typography variant='h6' gutterBottom>
                     Follow Us
                  </Typography>
                  <Box>
                     {socialIcons.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                           <IconButton
                              key={index}
                              href={social.href}
                              sx={{
                                 color: social.color,
                                 "&:hover": { transform: "scale(1.4)" },
                              }}
                           >
                              <IconComponent />
                           </IconButton>
                        );
                     })}
                  </Box>
               </Grid>
               <Grid item xs={12} sm={6} md={3}>
                  <Typography variant='h6' gutterBottom>
                     Contact Us
                  </Typography>
                  <Typography variant='body2'>
                     123 Tech St.
                     <br />
                     Developer City, 56789
                     <br />
                     Email: info@itsindianguy.in
                     <br />
                     Phone: +917930665379
                  </Typography>
               </Grid>
            </Grid>
            <Divider sx={{ my: 4 }} />
            <Box textAlign='center'>
               <Typography variant='body2'>
                  &copy; {new Date().getFullYear()} ItsIndianGuy. All rights
                  reserved.
               </Typography>
            </Box>
         </Container>
      </Box>
   );
};

export default Footer;
