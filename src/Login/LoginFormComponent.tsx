import React, { useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { Google } from "@mui/icons-material"; // Import Google Icon
import CustomTextField from "../Components/CustomTextField";
import backgroundImage from "../assets/WorkOutCard.jpeg";
import ParticleBackground from "./ParticalBackground";

export default function LoginForm() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleLoginFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} 
    padding={4}     
    sx={{
      minHeight: "100dvh",
      position: "relative",
      overflow: "hidden", 
    }}>
      
      {/* Particle Background */}
      {/* am gonna fix it later  */}
      <ParticleBackground/>

      {/* Main Content  */}
      <Box
        component={"div"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"stretch"}
        borderRadius={"0.5rem"}
        gap={3}
        sx={{
          position: "relative",
          backgroundColor: "#121212",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5), inset 0px 0px 8px rgba(255, 255, 255, 0.1)",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-50%",
            right: "0%",
            width: "200%",
            height: "200%",
            background: "radial-gradient(rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
            transform: "rotate(45deg)",
            zIndex: 0,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: {xs : "-25%" , md : "-50%"},
            right: "50%",
            width: "20%",
            height: "200%",
            backgroundColor: 'primary.main',
            opacity: 0.1,
            transform: "rotate(45deg)",
            zIndex: 0,
          },
          padding:'1rem'
        }}
        
      >
        {/* Left Section: Image */}
        <Box
          sx={{
            display:{ xs: "none", sm: "none" , md: "block"},
            flex: 2,
            position: "relative",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minWidth: "15rem",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 1,
              
            },
          }}
        />

        {/* Right Section: Login Form */}
        <Box
          component={"form"}
          padding={5}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"0 0.5rem 0.5rem 0"}
          gap={3}
          justifyContent={"center"}
          alignContent={"center"}
          flex={2}
          sx={{
            position: "relative",
            backgroundColor: "trasparent",
}}>
          <Typography
            textAlign="center"
            variant="h4"
            fontWeight={800}
            color="white"
            sx={{
              position: "relative",
              zIndex: 1,
              textShadow: "0px 2px 3px rgba(255, 255, 255, 0.5), 0px 0px 10px #84b900",
            }}
          >
            Welcome Back
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "0.7rem",
              textAlign: "center",
              overflowWrap: "break-word",
            }}
          >
            Welcome back to FitAI: Embrace the change, Achieve your goals, and Unleash your inner strength.
          </Typography>

          <CustomTextField
            name="email"
            type="text"
            labelText="Enter email"
            placeholder="...@gmail.com"
            onChange={handleLoginFormChange}
          />
          <CustomTextField
            name="password"
            smallText="At least 8 characters 1 uppercase 1 lowercase 1 number 1 special"
            type="password"
            labelText="Password"
            placeholder="Hasb2smm$"
            onChange={handleLoginFormChange}
          />
          <Button
            sx={{
              padding: "0.5rem 1rem",
              backgroundColor: "primary.main",
              color: "background.paper",
              fontWeight: 800,
              borderRadius: "0.5rem",
              transition: "0.3s",
              fontSize: {xs: 11 , sm: 14},
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.6)",
              },
            }}
          >
            Login
          </Button>

          <Divider>or</Divider>

          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              backgroundColor: "primary.main",
              color: "black",
              fontWeight: 600,
              fontSize: {xs: 11 , sm: 14},
              borderRadius: "0.5rem",
              transition: "0.3s",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.6)",
              },
            }}
          >
            <Google style={{ color: "black", marginRight: "0.5rem" }} /> {/* Google Icon */}
            Sign In With Google
          </Button>

          <Typography textAlign={"center"} color="text.secondary" fontSize={14} >
            don't have an account ? <a href="/register">Sign Up </a>
          </Typography>
        </Box>

      </Box>
    </Box>
  );
}
