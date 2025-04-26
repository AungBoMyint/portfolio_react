import { Box, Flex, Image, Text } from "@chakra-ui/react";
import me from "../assets/image/me.png";
import { Typewriter } from "react-simple-typewriter";
import WorkExperience from "../components/home/WorkExperience";
import { useEffect, useRef, useState } from "react";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const elementRef = useRef(null);
  useEffect(() => {
    console.log(`IsVisible: ${isVisible}`);
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is visible
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Start observing the element
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <Box spaceY={20} id="home">
      <Box ref={elementRef}>
        <Flex gap={10}>
          <Box
            data-state={isVisible ? "open" : "close"}
            _open={{
              animationName: "fade-in, scale-in",
              animationDuration: "2000ms",
            }}
            _closed={{
              animationName: "fade-out, scale-out",
              animationDuration: "1000ms",
            }}
            justifyItems={"center"}
            alignContent={"center"}
            bg="radial-gradient(circle, #763CAC 0%, #320F85 100%)"
            h={{ lg: "200px", base: "140px" }}
            w={{ lg: "200px", base: "140px" }}
            borderRadius={100}
            boxShadow="0 0 50px rgba(135,92,189,1)"
          >
            <Box
              justifyItems={"center"}
              alignContent={"center"}
              bg="radial-gradient(circle, #763CAC 0%, #320F85 100%)"
              h={{ lg: "160px", base: "100px" }}
              w={{ lg: "160px", base: "100px" }}
              boxShadow="0 0 10px rgba(135,92,189,1)"
            >
              <Image
                h={{ lg: "160px", base: "100px" }}
                w={{ lg: "160px", base: "100px" }}
                src={me}
              />
            </Box>
          </Box>
          <Box>
            <Text
              color={"white"}
              data-state={isVisible ? "open" : "close"}
              _open={{
                animationName: "fade-in, scale-in",
                animationDuration: "1000ms",
              }}
              _closed={{
                animationName: "fade-out, scale-out",
                animationDuration: "1000ms",
              }}
            >
              Hello! I am{" "}
              <span style={{ color: "#D53F8C" }}>Aung Bo Myint</span>
            </Text>
            <Box
              textStyle={"preahvihear"}
              fontSize={"xl"}
              pt={6}
              color={"white"}
            >
              <Typewriter
                words={["I'm a Full-Stack Software Developer.!"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                /*  onLoopDone={handleDone}
            onType={handleType} */
              />
            </Box>
            {/* <Text
            textStyle={"preahvihear"}
            fontSize={"xl"}
            pt={6}
            color={"white"}
          >
            I'm a Full-Stack Software Developer.!
          </Text> */}
            <Text
              mt={2}
              textStyle={"preahvihear"}
              fontSize={"sm"}
              color={"white"}
            >
              Currently, I'm a freelance developer. 🌏 💻
            </Text>
          </Box>
        </Flex>
        <Text
          pt={{ base: 2, lg: 8 }}
          color={"white"}
          data-state={isVisible ? "open" : "close"}
          _open={{
            animationName: "slide-to-right",
            animationDuration: "1000ms",
          }}
          _closed={{
            animationName: "fade-out, scale-out",
            animationDuration: "1000ms",
          }}
        >
          I am a Full-Stack Software Developer with 4 years of hands-on
          experience working as a freelancer. I specialize in building robust,
          scalable web and mobile applications using modern technologies
          including React , Django , Node.js , and Flutter .
        </Text>
      </Box>
      <WorkExperience />
    </Box>
  );
};

export default HomePage;
