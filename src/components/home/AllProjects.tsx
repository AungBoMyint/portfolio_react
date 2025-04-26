import { Box, Grid, Image } from "@chakra-ui/react";
import projects from "../../assets/data/projects.json";
import background from "../../assets/image/background.svg";

const AllProjects = () => {
  return (
    <Grid gap={4} templateColumns={{ lg: "repeat(2, 1fr)" }}>
      {projects.map((project, index) => {
        return (
          <Box
            h={{ base: "2100px", lg: "fit" }}
            key={index}
            position={"relative"}
          >
            <Image
              top={"50%"}
              transform="translate(-0%, -50%)"
              position={"absolute"}
              src={project.image}
            />
            <Image src={background} />
          </Box>
        );
      })}
    </Grid>
  );
};

export default AllProjects;
