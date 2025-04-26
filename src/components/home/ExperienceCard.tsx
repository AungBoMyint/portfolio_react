import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface Props {
  icon: any;
  title: string;
  exp_year: string;
  index: number;
}
const ExperienceCard = (props: Props) => {
  /* const [isVisible, setIsVisible] = useState(true);
  const elementRef = useRef(null);

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
  }, []); */
  return (
    <Box
      /* ref={elementRef} */
      data-state={"open"}
      _open={{
        animationName: "scale-in",
        animationDuration: `2000ms`,
        animationDelay: `${90 * (props.index + 4)}ms`,
      }}
      _closed={{
        animationName: "scale-out",
        animationDuration: `2000ms`,
        animationDelay: `${90 * (props.index + 4)}ms`,
      }}
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
      }}
      bg="radial-gradient(rectangle, #763CAC 0%, #320F85 100%)"
      boxShadow="0 0 20px rgba(135,92,189,0.5)"
      borderTop={"2px solid"}
      borderColor={"pink.600"}
      p={6}
      color="white"
      height={"100%"}
      rounded={"lg"}
    >
      <Flex align={"center"} gap={4}>
        <Image src={props.icon} />
        <Box>
          <Text>{props.title}</Text>
          <Text fontSize={"xs"}>{props.exp_year}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ExperienceCard;
