import { Box, Text, Image, Grid, GridItem } from "@chakra-ui/react";
import background from "../../assets/image/background.svg";
import ExperienceCard from "./ExperienceCard";
import star from "../../assets/icon/star.svg";
import bulb from "../../assets/icon/bulb.svg";
import cup from "../../assets/icon/cup.svg";
import mike from "../../assets/icon/mike.svg";
import SkillsSection from "./SkillsSection";

const WorkExperience = () => {
  return (
    <Box id="work_experience" spaceY={4}>
      <Text
        fontWeight={"semibold"}
        textStyle={"preahvihear"}
        fontSize={"xl"}
        color={"white"}
      >
        Work Experience
      </Text>

      <Box justifyItems={"center"} position={"relative"} h={"fit"}>
        <Image
          position={"absolute"}
          left="50%"
          top={10}
          transform="translate(-50%, -50%)"
          src={background}
        />
        <Box spaceY={14} width={"full"} position={"absolute"} top={0} left={0}>
          <Grid
            gap={2}
            templateRows="repeat(2, 1fr)"
            templateColumns={{
              lg: "repeat(2,1fr)",
              md: "repeat(2,1fr)",
              base: "repeat(1,1fr)",
            }}
          >
            <GridItem w={"full"}>
              <ExperienceCard
                icon={star}
                title="Junior Flutter Developer"
                exp_year="2 years"
                index={1}
              />
            </GridItem>
            <GridItem>
              <ExperienceCard
                icon={bulb}
                title="Senior Flutter Developer"
                exp_year="3 years"
                index={2}
              />
            </GridItem>
            <GridItem>
              <ExperienceCard
                icon={cup}
                title="Django,Node.js Developer"
                exp_year="1 years"
                index={3}
              />
            </GridItem>
            <GridItem>
              <ExperienceCard
                icon={mike}
                title="React Developer"
                exp_year="1.5 years"
                index={4}
              />
            </GridItem>
          </Grid>
          <SkillsSection />
          {/*  <AllProjects /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default WorkExperience;
