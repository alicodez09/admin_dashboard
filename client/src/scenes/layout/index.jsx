import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Slidebar from "components/Slidebar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSliderbarOpen, setIsSlidebarOpen] = useState(true);
  return (
    <Box width="100%" height="100%" display={isNonMobile ? "flex" : "block"}>
      <Slidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSliderbarOpen={isSliderbarOpen}
        setIsSlidebarOpen={setIsSlidebarOpen}
      />
      <Box>
        <Navbar
          isSliderbarOpen={isSliderbarOpen}
          setIsSlidebarOpen={setIsSlidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
