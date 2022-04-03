import { Box, Container } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Home } from "./Home/Home";
import { Prints } from "./Prints/Prints";

export const Main: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", height: "100%", minHeight: "100vh" }}>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="prints/:pageId" element={<Prints />} />
        </Routes>
      </Container>
    </Box>
  );
};
