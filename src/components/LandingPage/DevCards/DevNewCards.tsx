// components/DevNewCards.tsx
import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useThemeState } from "@/context/ThemeContext";
import styles from "@/styles/Home.module.css";

interface DevNewCardsProps {
   steps: string[];
}

interface StepBoxProps {
   level: number;
}

const StepBox = styled(Box)<StepBoxProps>(({ theme, level }) => ({
   display: "flex",
   alignItems: "center",
   marginBottom: theme.spacing(2),
   marginLeft: `${level * 100}px`,
}));

const DevNewCards: React.FC<DevNewCardsProps> = ({ steps }) => {
   const { customTheme } = useThemeState();

   const CustomTypography = styled(Typography)({
      color: customTheme === "dark" ? "#ddd" : "#222",
      textDecoration: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   });

   const CustomBox = styled(Box)(({ theme }) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      //   width: "100%",
      cursor: "pointer",
   }));

   return (
      <Box>
         {steps.map((step, index) => (
            <StepBox key={index} level={index}>
               <CustomBox className={styles.DevCardsColumnsCard}>
                  <CustomTypography>
                     <FontAwesomeIcon
                        icon={faGlobe}
                        style={{ marginRight: "10px" }}
                     />
                     {step}
                  </CustomTypography>
               </CustomBox>
            </StepBox>
         ))}
      </Box>
   );
};

export default DevNewCards;
