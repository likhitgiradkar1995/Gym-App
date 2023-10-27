import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import gymLogo from "../assets/assets/images/gym-logo.jpg";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img
          src={gymLogo}
          alt="Fe26"
          style={{ width: "100px", height: "90px" }}
        />
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "28px", xs: "20px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        Made with ❤️ by Likhit
      </Typography>
    </Box>
  );
};

export default Footer;
