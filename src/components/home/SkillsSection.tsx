import { Box, Text, Image } from "@chakra-ui/react";
import skills from "../../assets/image/Skills.png";
import { useState, useRef, useEffect } from "react";

const SkillsSection = () => {
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
    <Box
      id="skills"
      ref={elementRef}
      spaceY={4}
      data-state={isVisible ? "open" : "close"}
      _open={{
        animationName: "fade-in, scale-in",
        animationDuration: "2000ms",
      }}
      _closed={{
        animationName: "fade-out, scale-out",
        animationDuration: "1000ms",
      }}
    >
      <Text
        textAlign={"center"}
        textStyle={"preahvihear"}
        fontSize={"sm"}
        color={"white"}
      >
        I'm available to{" "}
        <span style={{ color: "#D53F8C" }}>
          accept projects and looking to collaborate
        </span>{" "}
        on building innovative, scalable, and user-friendly software solutions.
      </Text>
      <Image src={skills} minH={"300px"} />
    </Box>
  );
};

export default SkillsSection;
