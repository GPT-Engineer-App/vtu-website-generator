import { Box, Flex, Heading, Text, Button, Image, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaUniversity, FaBook, FaUserGraduate, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" m={4}>
        <Image src="https://images.unsplash.com/photo-1590231204765-12b10cedb4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MHx8fHwxNzEzMzE5ODYyfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" w="full" h="300px" objectFit="cover" alt="University Building" />
        <Heading mt={4}>Visvesvaraya Technological University</Heading>
        <Text fontSize="lg" mt={2}>
          A Leading Technological University Empowering Future Innovations
        </Text>
      </Flex>

      <VStack spacing={4} mt={6} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="xl">About VTU</Heading>
          <Text mt={4}>Visvesvaraya Technological University (VTU) is one of India's leading and largest technological universities. It is located in Belgaum, Karnataka, with over 200 colleges affiliated to it.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="xl">Programs Offered</Heading>
          <HStack spacing={10} mt={4}>
            <VStack>
              <Icon as={FaBook} w={8} h={8} />
              <Text>Engineering</Text>
            </VStack>
            <VStack>
              <Icon as={FaUserGraduate} w={8} h={8} />
              <Text>Management</Text>
            </VStack>
            <VStack>
              <Icon as={FaUniversity} w={8} h={8} />
              <Text>Research</Text>
            </VStack>
          </HStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="xl">Contact Us</Heading>
          <VStack align="start" mt={4}>
            <HStack>
              <Icon as={FaPhone} />
              <Text>+91 123 456 7890</Text>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} />
              <Text>info@vtu.ac.in</Text>
            </HStack>
          </VStack>
        </Box>
      </VStack>

      <Flex justify="center" mt={10} mb={4}>
        <Link href="https://www.facebook.com/VTUofficial" isExternal>
          <Button leftIcon={<FaFacebook />} colorScheme="facebook" mr={2}>
            Facebook
          </Button>
        </Link>
        <Link href="https://twitter.com/vtuinfo" isExternal>
          <Button leftIcon={<FaTwitter />} colorScheme="twitter" mr={2}>
            Twitter
          </Button>
        </Link>
        <Link href="https://www.instagram.com/vtu_official/" isExternal>
          <Button leftIcon={<FaInstagram />} colorScheme="pink">
            Instagram
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Index;
