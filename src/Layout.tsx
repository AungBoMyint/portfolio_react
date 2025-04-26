import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/home/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Grid
      gridTemplateAreas={"'nav' 'main'"}
      templateRows="auto 1fr"
      height="100vh"
      bg={"background.500"}
    >
      <NavBar />
      <GridItem area={"main"} overflow={"hidden"}>
        <Box
          justifySelf={"center"}
          px={{ lg: 20, md: 20, base: 10 }}
          py={20}
          width={{ lg: "70vw", md: "100vw" }}
          height={"full"}
          overflowY={"auto"}
          scrollbarWidth={"none"}
          /* sx={{
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari
            },
          }} */
        >
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Layout;
