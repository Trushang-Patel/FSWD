import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();
  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color={"primary"} fontWeight="bold">
        Interact AI
      </Typography>
      <Link href="/register" p={1}>
        Sign Up
      </Link>
      <Link href="/login" p={1}>
        Sign In
      </Link>
    </Box>
  );
};

export default Navbar;