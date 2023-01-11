import React from 'react'
import { Box } from '@mui/system'

import { Typography,useTheme, useMediaQuery } from '@mui/material'
import Form from './widgets/forms/Form';
function LoginPage() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)")
  const theme = useTheme();


  
  return (
    <Box width="100%"  backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center" >
      <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"
        
        >
          Sociopedia
        </Typography>
        <Box width={isNonMobileScreens ? "50%": "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        >
          <Typography fontSize="500" variant="h5" sx={{mb:"1.5rem"}}>
            Welcome to Sociopedia the Social Media for Sociopaths!
            
          </Typography>
          <Form/>
          
           
        </Box>
    </Box>
  )
}

export default LoginPage