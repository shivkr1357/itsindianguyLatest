import React from "react";
import {
   Box,
   Container,
   Grid,
   Typography,
   Card,
   CardContent,
   Avatar,
} from "@mui/material";
import styles from "@/styles/About.module.css";

const teamMembers = [
   {
      name: "Shiv Shankar Prasad",
      role: "Founder & CEO",
      image: "/images/john.jpg",
      description:
         "Shiv is a tech enthusiast with over 4 years of experience in software development.",
   },
   // {
   //    name: "Jane Smith",
   //    role: "Lead Developer",
   //    image: "/images/jane.jpg",
   //    description:
   //       "Jane is a full-stack developer who loves to create beautiful and functional web applications.",
   // },
   // {
   //    name: "Bob Johnson",
   //    role: "Content Writer",
   //    image: "/images/bob.jpg",
   //    description:
   //       "Bob is passionate about writing engaging and informative tech content.",
   // },
];

const AboutComponent = () => {
   return (
      <Box
         component='main'
         sx={{
            // backgroundColor: "#f4f4f4",
            my: 8,
            color: "#333",
            py: 8,
            // minHeight: "100vh",
         }}
      >
         <Container maxWidth='lg'>
            <Typography variant='h4' gutterBottom textAlign='center'>
               About Us
            </Typography>
            <Typography variant='body1' gutterBottom textAlign='center'>
               Welcome to ItsIndianGuy! We are a team of tech enthusiasts
               dedicated to providing the latest news, tutorials, and
               entertainment in the tech world.
            </Typography>
            <Grid container spacing={4} justifyContent='center' sx={{ mt: 4 }}>
               {teamMembers.map((member, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                     <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                           <Box
                              sx={{
                                 display: "flex",
                                 flexDirection: "column",
                                 alignItems: "center",
                              }}
                           >
                              <Avatar
                                 src={member.image}
                                 alt={member.name}
                                 sx={{ width: 100, height: 100, mb: 2 }}
                              />
                              <Typography variant='h6' gutterBottom>
                                 {member.name}
                              </Typography>
                              <Typography variant='body2' color='textSecondary'>
                                 {member.role}
                              </Typography>
                              <Typography
                                 variant='body2'
                                 sx={{ mt: 2, textAlign: "center" }}
                              >
                                 {member.description}
                              </Typography>
                           </Box>
                        </CardContent>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </Container>
      </Box>
   );
};

export default AboutComponent;
